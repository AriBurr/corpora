<template>
  <StyledDiv :border="styled(`border`)" width="50%" margin="10px">
    <StyledSubHeader :fontSize="styled(`subHeaderFS`)"
      >Recommendations</StyledSubHeader
    >
    <StyledDiv
      v-for="thing in generatedRecommendations"
      :key="thing"
      cursor="pointer"
      :backgroundColor="styled(`bg`)"
      hoverBrightness="brightness(90%)"
    >
      <StyledText>{{ thing.rec }}</StyledText>
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
export default {
  props: ["generatedRecommendations"],
  components: { StyledDiv, StyledText, StyledSubHeader },
  methods: {
    styled(e) {
      if (e === "border") {
        return `5px solid ${ReadStyleGuide.color.lightGray}`;
      } else if (e === "bg") {
        return ReadStyleGuide.color.white;
      } else if (e === "subHeaderFS") {
        return ReadStyleGuide.font.size.mediumSmall;
      }
    }
  }
};
</script>

<style></style>
