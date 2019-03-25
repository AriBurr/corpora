<template>
  <StyledDiv
    flexDirection="row"
    height="60px"
    width="50%"
    alignSelf="center"
    margin="10px 0"
    :border="styled(`border`)"
    borderRadius="10px"
  >
    <StyledDiv width="50%" height="100%" justifyContent="center">
      <StyledText :fontWeight="styled(`fw`)">Word Length:</StyledText>
      <StyledText>{{ selectedWordLength }}</StyledText>
    </StyledDiv>
    <StyledDiv width="50%" height="100%" justifyContent="center">
      <StyledText :fontWeight="styled(`fw`)">Letters Selected:</StyledText>
      <StyledDiv flexDirection="row">
        <StyledText v-for="single in selectedLetters" :key="single"
          >{{ single }}{{ selectedLetters.length > 1 ? "," : null }}</StyledText
        >
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import { StyledText, StyledDiv, ReadStyleGuide } from "../styled";
export default {
  components: { StyledDiv, StyledText },
  props: ["selectedLanguage", "selectedLetters", "selectedWordLength"],
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
