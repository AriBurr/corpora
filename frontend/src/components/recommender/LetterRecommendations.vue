<template>
  <StyledDiv
    :border="styled(`border`)"
    :width="phonemeRecommendations.length > 0 ? `50%` : `100%`"
    margin="5px 1px"
    borderRadius="10px"
  >
    <StyledSubHeader>Letter</StyledSubHeader>
    <StyledDiv flexWrap="wrap" flexDirection="row">
      <StyledDiv
        v-for="single in letterRecommendations"
        :key="single.count * Math.random()"
        cursor="pointer"
        :backgroundColor="styled(`white`)"
        hoverBrightness="brightness(90%)"
        flexDirection="row"
        :border="`2px solid ${styled('lightGray')}`"
        minWidth="100px"
        @click="handlePhonemeSelection"
        width="30%"
        margin="3px"
        padding="5px"
      >
        <StyledDiv minHeight="30px">
          <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)"
            >Sound</StyledText
          >
          <StyledText>{{ single.rec }}</StyledText>
        </StyledDiv>
        <StyledDiv minHeight="30px">
          <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)"
            >Word</StyledText
          >
          <StyledText>{{ single.substr }}</StyledText>
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
    "handlePhonemeSelection"
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
