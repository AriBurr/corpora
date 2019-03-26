<template>
  <StyledDiv
    :border="styled(`border`)"
    width="50%"
    margin="5px 1px"
    borderRadius="10px"
    overflow="hidden"
  >
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
        return `2px solid ${ReadStyleGuide.color.brightYellow}`;
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
