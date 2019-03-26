<template>
  <StyledDiv
    :justifyContent="selectedLanguage ? 'space-around' : 'flex-start'"
    alignItems="flex-start"
    height="100%"
  >
    <StyledDiv height="10%">
      <StyledHeader width="100%" height="5%">Recommender System</StyledHeader>
    </StyledDiv>
    <StyledDiv flexDirection="row" justifyContent="space-around" height="12%">
      <LanguageSelect
        recommender="true"
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
        :color="styled(`buttonColor`)"
        :backgroundColor="styled(`buttonBG`)"
        :borderColor="styled(`buttonBG`)"
        @click="handleGeneration"
        width="20%"
        height="100%"
        margin="5px"
        >Generate Recommendations</StyledButton
      >
    </StyledDiv>
    <StyledDiv
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      height="58%"
    >
      <StyledDiv v-if="selectedLanguage !== false" width="20%" margin="0 5px">
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
      <StyledDiv
        justifyContent="flex-start"
        alignItems="flex-start"
        height="100%"
        width="80%"
      >
        <DisplayRecommendations
          v-if="generatedRecommendations.length"
          :generatedRecommendations="generatedRecommendations"
        />
      </StyledDiv>
    </StyledDiv>
    <AlphabetSelection
      v-if="selectedLanguage !== false"
      :handleLetterSelection="handleLetterSelection"
      :selectedLetters="selectedLetters"
      :letters="letterListFromLanguage"
    />
  </StyledDiv>
</template>
<script>
import axios from "axios";

import PhonemeList from "../helpers/PhonemeList";
import AlphabetList from "../helpers/AlphabetList";

import UserSelections from "../components/recommender/UserSelections";
import LanguageSelect from "../components/uploads/LanguageSelect";
import DisplayRecommendations from "../components/recommender/DisplayRecommendations";
import WordLengthSelection from "../components/recommender/WordLengthSelection";
import PhonemeSelection from "../components/recommender/PhonemeSelection";
import AlphabetSelection from "../components/recommender/AlphabetSelection";

import {
  StyledDiv,
  StyledButton,
  StyledHeader,
  ReadStyleGuide
} from "../components/styled/index.js";

export default {
  name: "Recommender",
  components: {
    StyledDiv,
    StyledHeader,
    StyledButton,
    UserSelections,
    DisplayRecommendations,
    WordLengthSelection,
    PhonemeSelection,
    LanguageSelect,
    AlphabetSelection
  },
  data() {
    return {
      selectedWordLength: null,
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
      console.log("handle genertation");
      if (this.selectedLetters.length >= 4 && this.selectedWordLength !== 0) {
        axios
          .post("/generate_recommendations/", {
            letters: this.selectedLetters.join(""),
            word_length: this.selectedWordLength
          })
          .then(r => {
            console.log("fart");
            console.log(r);
            this.updateRecommendations(r.data);
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
    },
    styled(e) {
      if (e === "buttonColor") {
        return ReadStyleGuide.color.white;
      } else if (e === "buttonBG") {
        return ReadStyleGuide.color.lightGreen;
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
