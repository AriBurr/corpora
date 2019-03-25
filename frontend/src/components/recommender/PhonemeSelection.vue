<template>
  <StyledDiv :border="styled(`border`)" padding="10px 0" maxHeight="350px">
    <StyledSubHeader :fontSize="styled(`subHeaderFS`)"
      >Phoneme Selection</StyledSubHeader
    >
    <StyledScrollDiv class="radioBoxes" width="95%">
      <Checkbox
        v-for="single of phonemeList"
        :key="single.id"
        v-model="selectedPhoneme"
        :passedFunc="handlePhonemeSelection"
        passedName="wordLength"
        :passedTitle="single.title"
        passedValue="single.value"
      />
    </StyledScrollDiv>
  </StyledDiv>
</template>

<script>
import Checkbox from "../generics/Checkbox";
import {
  StyledDiv,
  StyledSubHeader,
  ReadStyleGuide,
  StyledScrollDiv
} from "../styled/index.js";
export default {
  components: { Checkbox, StyledDiv, StyledSubHeader, StyledScrollDiv },
  props: ["handlePhonemeSelection", "selectedPhoneme", "phonemeList"],
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
