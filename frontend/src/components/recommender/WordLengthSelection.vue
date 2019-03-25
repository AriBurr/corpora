<template>
  <StyledDiv
    :border="styled(`border`)"
    padding="10px 0"
    margin="5px 0"
    justifyContent="space-around"
  >
    <StyledSubHeader :fontSize="styled(`subHeaderFS`)"
      >Word Length</StyledSubHeader
    >
    <StyledDiv
      class="radioBoxes"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
    >
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="2 Letters"
        passedValue="2"
        type="radio"
      />
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="3 Letters"
        passedValue="3"
        type="radio"
      />
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="4 Letters"
        passedValue="4"
        type="radio"
      />
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="5 Letters"
        passedValue="5"
        type="radio"
      />
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="6 Letters"
        passedValue="6"
        type="radio"
      />
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="7 Letters"
        passedValue="7"
        type="radio"
      />
      <RadioButton
        v-model="selectedWordLength"
        passedWidth="50%"
        :passedFunc="handleWordLength"
        passedName="wordLength"
        passedTitle="8+ Letters"
        passedValue="8"
        type="radio"
      />
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import RadioButton from "../generics/RadioButton";
import { StyledDiv, StyledSubHeader, ReadStyleGuide } from "../styled/index.js";
export default {
  components: { RadioButton, StyledDiv, StyledSubHeader },
  props: ["selectedWordLength", "handleWordLength"],
  methods: {
    styled(e) {
      if (e === "border") {
        return `5px solid ${ReadStyleGuide.color.lightGray}`;
      } else if (e === "subHeaderFS") {
        return ReadStyleGuide.font.size.mediumSmall;
      }
    }
  }
};
</script>

<style></style>
