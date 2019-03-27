import itertools
import json
import  pprint
import re
from django.db import connection

class RecommenderService(object):
    @staticmethod
    def get_all_permutations(data):
        return [[''.join(p)] for p in itertools.permutations(data["letters"], (data["word_length"] - 1))]
        
    @staticmethod
    def search_substrings(substrings, data):
        print(substrings)
        with connection.cursor() as cursor:
            create_temp_table = "CREATE TEMPORARY TABLE patterns (pattern VARCHAR(255));"
            insert_patterns = "INSERT INTO patterns VALUES (%s);"
            return_strings = f"SELECT word, p.pattern, count FROM words_word JOIN patterns p ON (words_word.word LIKE '%' || p.pattern || '%') WHERE length={data['word_length']} ORDER BY frequency DESC LIMIT 25"
            delete_temp_table = "DROP TABLE patterns"
            cursor.execute(create_temp_table)
            cursor.executemany(insert_patterns, substrings)
            cursor.execute(return_strings)
            response = cursor.fetchall()
            cursor.execute(delete_temp_table)
            cursor.close()
            res = [{"rec": res[0], "substr": res[1], "freq": res[2]} for res in response]
            return res

    @staticmethod
    def recommendations_by_phonemes(data):
        phoneme_data = [[p] for p in data["phonemes"]]
        recommendations = []
        with connection.cursor() as cursor:
            create_temp_table = "CREATE TEMPORARY TABLE temp_patterns (pattern VARCHAR(255));"
            cursor.execute(create_temp_table)
            insert_patterns = "INSERT INTO temp_patterns VALUES (%s);"
            cursor.executemany(insert_patterns, phoneme_data)
            for word_length in data["word_lengths"]:
                return_strings = f"SELECT word, p.pattern, count FROM words_word JOIN temp_patterns p ON (words_word.word LIKE '%' || p.pattern || '%') WHERE length={word_length}"
                cursor.execute(return_strings)
                response = cursor.fetchall()
                recommendations.extend(response)
            delete_temp_table = "DROP TABLE temp_patterns"
            cursor.execute(delete_temp_table)
            cursor.close()
            recs = [{"word": recs[0], "grapheme": recs[1], "count": recs[2]} for recs in recommendations]
            phoneme_string = "".join(data["phonemes"])
            regex = re.compile(f"^[{phoneme_string}]+$")
            filtered_recs = [r for r in recs if re.search(regex, r["word"])]
            return filtered_recs
