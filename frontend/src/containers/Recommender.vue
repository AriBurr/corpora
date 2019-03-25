<template>
  <StyledDiv
    justifyContent="flex-start"
    alignItems="flex-start"
    margin="0 20px"
    height="100%"
  >
    <StyledHeader width="100%">Recommender System</StyledHeader>
    <LanguageSelect
      flexDirection="true"
      v-model="selectedLanguage"
      :languages="languages"
      @languageSelection="languageSelection"
      passedTitle="Select a Language:"
    />
    <StyledDiv v-if="selectedLanguage !== false" flexDirection="row">
      <UserSelections
        v-if="selectedLanguage !== false"
        :selectedLanguage="selectedLanguage"
        :selectedLetters="selectedLetters"
        :selectedWordLength="selectedWordLength"
      />
      <StyledButton @click="handleGeneration" margin="0 0 0 20px"
        >Generate</StyledButton
      >
    </StyledDiv>
    <StyledDiv
      v-if="selectedLanguage !== false"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <StyledDiv width="20%">
        <WordLengthSelection
          :handleWordLength="handleWordLength"
          :selectedWordLength="selectedWordLength"
        />
        <PhonemeSelection
          :handlePhonemeSelection="handlePhonemeSelection"
          :selectedPhoneme="selectedPhoneme"
          :phonemeList="phonemeList"
        />
      </StyledDiv>
      <AlphabetSelection
        :handleLetterSelection="handleLetterSelection"
        :selectedLetters="selectedLetters"
        :letters="letterListFromLanguage"
      />
    </StyledDiv>
  </StyledDiv>
</template>
<script>
import axios from "axios";

import PhonemeList from "../helpers/PhonemeList";
import AlphabetList from "../helpers/AlphabetList";

import UserSelections from "../components/recommender/UserSelections";
import LanguageSelect from "../components/uploads/LanguageSelect";
import WordLengthSelection from "../components/recommender/WordLengthSelection";
import PhonemeSelection from "../components/recommender/PhonemeSelection";
import AlphabetSelection from "../components/recommender/AlphabetSelection";

import {
  StyledDiv,
  StyledButton,
  StyledHeader
} from "../components/styled/index.js";

export default {
  name: "Recommender",
  components: {
    StyledDiv,
    StyledHeader,
    StyledButton,
    UserSelections,
    WordLengthSelection,
    PhonemeSelection,
    LanguageSelect,
    AlphabetSelection
  },
  data() {
    return {
      selectedWordLength: 0,
      selectedLanguage: false,
      selectedPhoneme: [],
      selectedLetters: [],
      languages: [],
      phonemeList: [],
      letterListFromLanguage: [],
      generatedRecommendations: []
    };
  },
  mounted() {
    axios.get("/languages").then(r => (this.languages = r.data));
  },
  methods: {
    handleGeneration() {
      if (this.selectedLetters.length >= 4 && this.selectedWordLength !== 0) {
        axios
          .post("/generate_recommendations/", {
            letters: this.selectedLetters.join(""),
            word_length: this.selectedWordLength
          })
          .then(r => (this.generatedRecommendations = r))
          .catch(r => console.log("error -> " + r));
      } else {
        alert("Please Select 4 Letters and Word Length");
      }
    },
    listPhonemes() {
      switch (this.selectedLanguage) {
        case "1":
          this.phonemeList = PhonemeList.english;
          this.letterListFromLanguage = AlphabetList.english;
          return;
        case "2":
          this.phonemeList = PhonemeList.spanish;
          this.letterListFromLanguage = AlphabetList.spanish;
          return;
        default:
          return;
      }
    },
    handleWordLength(e) {
      this.selectedWordLength = parseInt(e);
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
