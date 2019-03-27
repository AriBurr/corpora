<template>
  <StyledDiv>
    <StyledSubHeader
      margin="10px 0"
      :fontSize="styled('fontSize-mediumSmall')"
    >Alphabet Letter Selection</StyledSubHeader>
    <StyledDiv flexDirection="row" justifyContent="space-around">
      <StyledDiv width="45%" flexWrap="wrap">
        <StyledText :fontWeight="styled('fontWeight-sevenHundred')">Capitalized</StyledText>
        <StyledDiv flexDirection="row" flexWrap="wrap">
          <StyledDiv
            v-for="letter in capitalizedLetters"
            @click="handleLetterSelection(letter.value)"
            :key="letter.id"
            width="50px"
            height="50px"
            margin="2px"
            borderRadius="5px"
            :backgroundColor="scopedStyled(`bg`, letter)"
            hoverBrightness="brightness(90%)"
            cursor="pointer"
          >
            <StyledText
              lineHeight="0"
              :fontWeight="styled('fontWeight-sevenHundred')"
              :color="scopedStyled(`textC`, letter)"
            >{{ determineLetter(letter.title) }}</StyledText>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv width="45%" flexWrap="wrap">
        <StyledText :fontWeight="styled('fontWeight-sevenHundred')">Lower Case</StyledText>
        <StyledDiv flexDirection="row" flexWrap="wrap">
          <StyledDiv
            v-for="letter in lowerCaseLetters"
            @click="handleLetterSelection(letter.value)"
            :key="letter.id"
            width="50px"
            height="50px"
            margin="2px"
            borderRadius="5px"
            :backgroundColor="scopedStyled(`bg`, letter)"
            hoverBrightness="brightness(90%)"
            cursor="pointer"
          >
            <StyledText
              lang="es"
              lineHeight="0"
              :fontWeight="styled('fontWeight-sevenHundred')"
              :color="scopedStyled(`textC`, letter)"
            >{{determineLetter(letter.title)}}</StyledText>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import { StyledDiv, StyledSubHeader, StyledText } from "../styled/index";
import { ReadStyleGuide } from "../styled";
import StyleCompiler from "../../helpers/StyleCompiler";
export default {
  components: { StyledDiv, StyledSubHeader, StyledText },
  props: [
    "selectedLetters",
    "capitalizedLetters",
    "lowerCaseLetters",
    "handleLetterSelection"
  ],
  computed: {},
  methods: {
    determineLetter(e) {
      const first = e.split("")[0];
      if (first === "&") {
        return `\xc0`;
      } else {
        return e;
      }
    },
    styled(e) {
      return StyleCompiler(e);
    },
    scopedStyled(e, l) {
      if (e === "bg") {
        if (this.selectedLetters.includes(l.title)) {
          return ReadStyleGuide.color.lightGreen;
        } else {
          return ReadStyleGuide.color.white;
        }
      } else if (e === "textC") {
        if (this.selectedLetters.includes(l.title)) {
          return ReadStyleGuide.color.SOSBlue;
        } else {
          return ReadStyleGuide.color.SOSBlue;
        }
      }
    }
  }
};
</script>

<style></style>
