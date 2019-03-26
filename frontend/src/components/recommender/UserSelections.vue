<template>
  <StyledDiv
    width="65%"
    margin="10px 0"
    height="100%"
    :border="styled(`border`)"
    borderRadius="10px"
  >
    <StyledSubHeader>User Selections</StyledSubHeader>
    <StyledDiv
      flexDirection="row"
      height="60px"
      alignSelf="center"
      width="100%"
      justifyContent="space-between"
    >
      <StyledDiv height="100%" justifyContent="center">
        <StyledText :fontWeight="styled(`fw`)">Word Length:</StyledText>
        <StyledText>{{ selectedWordLength }}</StyledText>
      </StyledDiv>
      <StyledDiv width="50%" height="100%" justifyContent="center">
        <StyledText :fontWeight="styled(`fw`)">Letters:</StyledText>
        <StyledDiv flexDirection="row">
          <StyledText v-for="(single, i) in selectedLetters" :key="single">
            {{ single
            }}{{
              selectedLetters.length > 1 && i !== selectedLetters.length - 1
                ? `, `
                : null
            }}
          </StyledText>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv height="100%">
        <StyledText :fontWeight="styled(`fw`)">Phoneme:</StyledText>
        <StyledDiv flexDirection="row">
          <StyledText v-for="single in selectedPhoneme" :key="single">
            {{ single }}{{ selectedPhoneme.length > 1 ? `, ` : null }}
          </StyledText>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import {
  StyledText,
  StyledDiv,
  ReadStyleGuide,
  StyledSubHeader
} from "../styled";
export default {
  components: { StyledDiv, StyledSubHeader, StyledText },
  props: [
    "selectedLanguage",
    "selectedLetters",
    "selectedWordLength",
    "selectedPhoneme"
  ],
  methods: {
    styled(e) {
      if (e === "fw") {
        return ReadStyleGuide.font.weight.sevenHundred;
      } else if (e === "border") {
        return `2px solid ${ReadStyleGuide.color.lightOrange}`;
      }
    }
  }
};
</script>

<style></style>
