<template>
  <StyledDiv
    :border="styled(`border`)"
    padding="10px 0"
    maxHeight="350px"
    borderRadius="10px"
  >
    <StyledSubHeader :fontSize="styled(`subHeaderFS`)"
      >Phoneme Selection</StyledSubHeader
    >
    <StyledDiv
      class="radioBoxes"
      width="95%"
      maxHeight="150px"
      height="150px"
      overflow="scroll"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Checkbox
        recommender="true"
        v-for="single of phonemeList"
        :key="single.id"
        v-model="selectedPhoneme"
        :passedFunc="handlePhonemeSelection"
        passedName="wordLength"
        :passedTitle="single.title"
        :passedValue="single.value"
      />
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import Checkbox from "../generics/Checkbox";
import { StyledDiv, StyledSubHeader, ReadStyleGuide } from "../styled/index.js";
export default {
  components: { Checkbox, StyledDiv, StyledSubHeader },
  props: ["handlePhonemeSelection", "selectedPhoneme", "phonemeList"],
  methods: {
    styled(e) {
      if (e === "border") {
        return `2px solid ${ReadStyleGuide.color.darkBlue}`;
      } else if (e === "subHeaderFS") {
        return ReadStyleGuide.font.size.mediumSmall;
      }
    }
  }
};
</script>

<style></style>
