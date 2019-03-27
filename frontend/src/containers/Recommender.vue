<template>
  <StyledDiv
    :justifyContent="selectedLanguage ? 'space-around' : 'flex-start'"
    alignItems="flex-start"
    minHeight="700px"
  >
    <StyledDiv flexDirection="row" justifyContent="space-around" height="100px" marginTop="20px">
      <LanguageSelect
        :recommender="true"
        v-model="selectedLanguage"
        :languages="languages"
        @languageSelection="languageSelection"
        passedTitle="Select a Language:"
      />
      <UserSelections
        :selectedLanguage="selectedLanguage"
        :selectedLetters="selectedLetters"
        :selectedWordLength="selectedWordLength"
        :selectedPhoneme="selectedPhoneme"
      />
      <StyledButton
        :color="styled(`white`)"
        :backgroundColor="styled(`lightGreen`)"
        :borderColor="styled(`lightGreen`)"
        @click="handleGeneration"
        width="20%"
        height="100%"
        minWidth="20%"
        margin="5px"
      >Update</StyledButton>
    </StyledDiv>
    <StyledDiv v-if="chosenStoryWords.length">
      <ChosenStoryWords :chosenWords="chosenStoryWords" :removeSingleWord="removeSingleWord"/>
    </StyledDiv>
    <StyledDiv
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      height="500px"
    >
      <StyledDiv
        v-if="selectedLanguage !== false"
        width="20%"
        margin="0 5px"
        height="100%"
        justifyContent="flex-start"
        marginTop="10px"
      >
        <StyledSubHeader>Tool Kit</StyledSubHeader>
        <StyledDiv
          v-on:click="viewSelect = single.func"
          v-for="(single, i) in toolkitButtons"
          :key="i"
          width="100%"
          minHeight="30px"
          cursor="pointer"
          :backgroundColor="
            viewSelect === single.func
              ? styled('brightYellow')
              : styled('white')
          "
          hoverBrightness="brightness(90%)"
          :borderBottom="
            `2px solid ${
              viewSelect === single.func
                ? styled('darkBlue')
                : styled('lightGray')
            }`
          "
        >
          <StyledText>{{ single.title }}</StyledText>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv height="95%" :backgroundColor="styled('darkBlue')" width="2px" margin="auto 0"/>
      <StyledDiv
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        height="100%"
        width="80%"
      >
        <LetterRecommendations
          v-if="letterRecommendations.length"
          :letterRecommendations="letterRecommendations"
          :phonemeRecommendations="phonemeRecommendations"
        />
        <PhonemeRecommendations
          v-if="phonemeRecommendations.length"
          :letterRecommendations="letterRecommendations"
          :phonemeRecommendations="sortedPhonemes"
          :handleChosenWords="handleChosenWords"
        />
      </StyledDiv>
    </StyledDiv>

    <StyledDiv minHeight="250px" :backgroundColor="styled(`lightGray`)" justifyContent="flex-start">
      <WordLengthSelection
        v-if="viewSelect === 1"
        :handleWordLength="handleWordLength"
        :selectedWordLength="selectedWordLength"
      />
      <AlphabetSelection
        v-if="viewSelect === 2"
        :handleLetterSelection="handleLetterSelection"
        :selectedLetters="selectedLetters"
        :capitalizedLetters="capitalizedLetters"
        :lowerCaseLetters="lowerCaseLetters"
      />
      <PhonemeSelection
        v-if="viewSelect === 3"
        :handlePhonemeSelection="handlePhonemeSelection"
        :selectedPhoneme="selectedPhoneme"
        :phonemeList="phonemeList"
      />
    </StyledDiv>
  </StyledDiv>
</template>
<script>
import axios from "axios";

import PhonemeList from "../helpers/PhonemeList";
import AlphabetList from "../helpers/AlphabetList";
import StyleCompiler from "../helpers/StyleCompiler";

import LetterRecommendations from "../components/recommender/LetterRecommendations";
import PhonemeRecommendations from "../components/recommender/PhonemeRecommendations";
import ChosenStoryWords from "../components/recommender/ChosenStoryWords";
import UserSelections from "../components/recommender/UserSelections";
import LanguageSelect from "../components/uploads/LanguageSelect";
import WordLengthSelection from "../components/recommender/WordLengthSelection";
import PhonemeSelection from "../components/recommender/PhonemeSelection";
import AlphabetSelection from "../components/recommender/AlphabetSelection";

import {
  StyledDiv,
  StyledSubHeader,
  StyledText,
  StyledButton
} from "../components/styled/index.js";

export default {
  name: "Recommender",
  components: {
    StyledDiv,
    StyledSubHeader,
    StyledText,
    StyledButton,
    ChosenStoryWords,
    UserSelections,
    LetterRecommendations,
    PhonemeRecommendations,
    WordLengthSelection,
    PhonemeSelection,
    LanguageSelect,
    AlphabetSelection
  },
  data() {
    return {
      selectedWordLength: [],
      selectedLanguage: false,
      viewSelect: 0,
      selectedPhoneme: [],
      chosenStoryWords: [],
      selectedLetters: [],
      languages: [],
      phonemeList: [],
      capitalizedLetters: [],
      lowerCaseLetters: [],
      phonemeRecommendations: [
        // { word: "i", grapheme: "i", count: 100 },
        // { word: "am", grapheme: "m", count: 90 },
        // { word: "am", grapheme: "a", count: 80 },
        // { word: "see", grapheme: "ee", count: 70 },
        // { word: "see", grapheme: "s", count: 60 },
        // { word: "sam ", grapheme: "s", count: 50 },
        // { word: "sam ", grapheme: "a", count: 40 },
        // { word: "sam ", grapheme: "m", count: 30 }
      ],
      letterRecommendations: [
        // { rec: "has", substr: "as", freq: 15 },
        // { rec: "its", substr: "it", freq: 5 },
        // { rec: "see", substr: "se", freq: 5 },
        // { rec: "sit", substr: "si", freq: 5 }
      ],
      toolkitButtons: [
        { title: "Word Length", func: 1 },
        { title: "Letters", func: 2 },
        { title: "Sounds", func: 3 }
      ]
    };
  },
  computed: {
    sortedPhonemes() {
      function compare(a, b) {
        if (a.count > b.count) return -1;
        if (b.count > a.count) return 1;
        return 0;
      }
      return this.phonemeRecommendations.sort(compare);
    }
  },
  mounted() {
    axios.get("/languages").then(r => (this.languages = r.data));
  },
  methods: {
    handleGeneration() {
      if (this.selectedPhoneme.length >= 1 && this.selectedWordLength !== 0) {
        const titles = this.selectedPhoneme.map(s => s.title);
        axios
          .post("/generate_phoneme_recommendations/", {
            phonemes: titles,
            word_lengths: this.selectedWordLength
          })
          .then(r => {
            console.log(r);
            this.phonemeRecommendations = r.data;
          })
          .catch(r => console.log("error -> " + r));
        axios
          .post("/generate_letter_recommendations/", {
            letters: this.selectedLetters,
            word_lengths: this.selectedWordLength
          })
          .then(r => {
            console.log(r);
            this.letterRecommendations = r.data;
          })
          .catch(r => console.log("error -> " + r));
      } else {
        alert("Please Select 4 Letters and Word Length");
      }
    },
    updateRecommendations(r) {
      console.log("ding dong");
      console.log(r);
      for (let s of r) {
        console.log(s);
        this.generatedRecommendations.push(s);
      }
    },
    listPhonemes() {
      switch (this.selectedLanguage) {
        case "1":
          this.phonemeList = PhonemeList.english;
          this.capitalizedLetters = AlphabetList.english.capitalized;
          this.lowerCaseLetters = AlphabetList.english.lowerCase;
          return;
        case "2":
          this.phonemeList = PhonemeList.spanish;
          this.capitalizedLetters = AlphabetList.spanish.capitalized;
          this.lowerCaseLetters = AlphabetList.spanish.lowerCase;
          return;
        default:
          return;
      }
    },
    handleWordLength(e) {
      function compare(a, b) {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      }
      if (this.selectedWordLength.includes(e)) {
        this.selectedWordLength = this.selectedWordLength.filter(s => {
          return s !== e;
        });
        this.selectedWordLength.sort(compare);
      } else {
        this.selectedWordLength.push(e);
        this.selectedWordLength.sort(compare);
      }
    },
    languageSelection(e) {
      this.selectedLanguage = e;
    },
    handlePhonemeSelection(e) {
      if (this.selectedPhoneme.includes(e)) {
        const update = this.selectedPhoneme.filter(s => s !== e);
        this.selectedPhoneme = update;
      } else {
        this.selectedPhoneme.push(e);
      }
    },
    handleLetterSelection(e) {
      if (this.selectedLetters.includes(e)) {
        const update = this.selectedLetters.filter(s => s !== e);
        this.selectedLetters = update;
      } else {
        this.selectedLetters.push(e);
      }
    },
    handleViewSelect(e) {
      return (this.viewSelect = e);
    },
    handleChosenWords(e) {
      const single = { count: e.count, grapheme: e.grapheme, word: e.word };
      this.chosenStoryWords.push(single);
      this.phonemeRecommendations = this.phonemeRecommendations.filter(r => {
        return r.grapheme !== single.grapheme || r.word !== single.word;
      });
    },
    removeSingleWord(e) {
      const single = { count: e.count, grapheme: e.grapheme, word: e.word };
      this.chosenStoryWords = this.chosenStoryWords.filter(r => {
        return r.grapheme !== single.grapheme || r.word !== single.word;
      });
      this.phonemeRecommendations.push(single);
    },
    styled(e) {
      return StyleCompiler(e);
    }
  },
  watch: {
    selectedLanguage() {
      this.listPhonemes();
    }
  }
};
</script>

<style></style>
