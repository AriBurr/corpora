<template>
  <StyledDiv
    :border="styled(`border`)"
    :width="letterRecommendations.length > 0 ? `50%` : `100%`"
    margin="5px 1px"
    borderRadius="10px"
  >
    <StyledSubHeader>Sound Recommendations</StyledSubHeader>
    <StyledDiv flexWrap="wrap" flexDirection="row" maxHeight="400px" overflow="scroll">
      <StyledDiv
        v-for="single in phonemeRecommendations"
        :key="single.count * Math.random()"
        cursor="pointer"
        :backgroundColor="styled(`white`)"
        hoverBrightness="brightness(90%)"
        flexDirection="row"
        :border="`2px solid ${styled('lightGray')}`"
        minWidth="100px"
        @click="handleChosenWords(single)"
        width="30%"
        margin="3px"
        padding="5px"
      >
        <StyledDiv minHeight="30px">
          <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)">Sound</StyledText>
          <StyledText>{{ single.grapheme }}</StyledText>
        </StyledDiv>
        <StyledDiv minHeight="30px">
          <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)">Word</StyledText>
          <StyledText>{{ single.word }}</StyledText>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import {
  StyledDiv,
  StyledText,
  StyledSubHeader,
  ReadStyleGuide
} from "../styled";
import StyleCompiler from "../../helpers/StyleCompiler";
export default {
  props: [
    "phonemeRecommendations",
    "letterRecommendations",
    "handleChosenWords"
  ],
  components: { StyledDiv, StyledText, StyledSubHeader },

  methods: {
    styled(e) {
      return StyleCompiler(e);
    }
  }
};
</script>

<style></style>
