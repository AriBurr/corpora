<template>
  <StyledDiv>
    <StyledSubHeader :fontSize="styled(`subHeaderFS`)"
      >Alphabet Letter Selection</StyledSubHeader
    >
    <StyledDiv flexDirection="row" width="75%" flexWrap="wrap">
      <StyledDiv
        v-for="letter in letters"
        @click="handleLetterSelection(letter.value)"
        :key="letter.id"
        width="50px"
        height="50px"
        border="1px solid black"
        :backgroundColor="styled(`bg`, letter)"
        hoverBrightness="brightness(90%)"
        cursor="pointer"
      >
        <StyledText lineHeight="0" :fontWeight="styled(`titleWeight`)">{{
          letter.title
        }}</StyledText>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import { StyledDiv, StyledSubHeader, StyledText } from "../styled/index";
import { ReadStyleGuide } from "../styled";
export default {
  components: { StyledDiv, StyledSubHeader, StyledText },
  props: ["selectedLetters", "letters", "handleLetterSelection"],
  methods: {
    styled(e, l) {
      if (e === "bg") {
        if (this.selectedLetters.includes(l.title)) {
          return ReadStyleGuide.color.lightGreen;
        } else {
          return ReadStyleGuide.color.white;
        }
      } else if (e === "subHeaderFS") {
        return ReadStyleGuide.font.size.mediumSmall;
      } else if (e === "titleWeight") {
        return ReadStyleGuide.font.weight.sevenHundred;
      }
    }
  }
};
</script>

<style></style>
