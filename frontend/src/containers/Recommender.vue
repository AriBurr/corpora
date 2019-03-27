<template>
  <StyledDiv
    :justifyContent="selectedLanguage ? 'space-around' : 'flex-start'"
    alignItems="flex-start"
    minHeight="700px"
  >
    <StyledDiv height="60px" padding="10px 0">
      <StyledHeader width="100%" height="5%">Recommender System</StyledHeader>
    </StyledDiv>
    <StyledDiv flexDirection="row" justifyContent="space-around" height="100px">
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
        margin="5px"
        >Generate Recommendations</StyledButton
      >
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
      <StyledDiv
        height="75%"
        :backgroundColor="styled('lightGray')"
        width="2px"
        margin="auto 0"
      />
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
    <StyledDiv
      height="250px"
      :backgroundColor="styled(`lightGray`)"
      justifyContent="flex-start"
    >
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

import UserSelections from "../components/recommender/UserSelections";
import LanguageSelect from "../components/uploads/LanguageSelect";
import DisplayRecommendations from "../components/recommender/DisplayRecommendations";
import WordLengthSelection from "../components/recommender/WordLengthSelection";
import PhonemeSelection from "../components/recommender/PhonemeSelection";
import AlphabetSelection from "../components/recommender/AlphabetSelection";

import {
  StyledDiv,
  StyledSubHeader,
  StyledText,
  StyledButton,
  StyledHeader
} from "../components/styled/index.js";

export default {
  name: "Recommender",
  components: {
    StyledDiv,
    StyledHeader,
    StyledSubHeader,
    StyledText,
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
      selectedWordLength: [],
      selectedLanguage: false,
      viewSelect: 0,
      selectedPhoneme: [],
      selectedLetters: [],
      languages: [],
      phonemeList: [],
      capitalizedLetters: [],
      lowerCaseLetters: [],
      generatedRecommendations: [],
      toolkitButtons: [
        { title: "Word Length", func: 1 },
        { title: "Alphabet", func: 2 },
        { title: "Sound", func: 3 }
      ]
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
          this.capitalizedLetters = AlphabetList.english.capitalized;
          this.lowerCaseLetters = AlphabetList.english.lowerCase;
          return;
        case "2":
          this.phonemeList = PhonemeList.spanish;
          this.capitalizedLetters = AlphabetList.spanish;
          return;
        default:
          return;
      }
    },
    handleWordLength(e) {
      if (
        // this.selectedWordLength.length > 0 &&
        this.selectedWordLength.includes(e)
      ) {
        const update = this.selectedWordLength.filter(s => {
          return s !== e;
        });
        this.selectedWordLength = update;
      } else {
        this.selectedWordLength.push(e);
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
