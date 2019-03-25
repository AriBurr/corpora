from rest_framework import serializers

class RecommenderSerializer(serializers.Serializer):
    letters = serializers.CharField(max_length=4)
    word_length = serializers.IntegerField()
