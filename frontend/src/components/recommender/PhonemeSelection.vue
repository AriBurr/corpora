<template>
  <StyledDiv justifyContent="flex-start">
    <StyledSubHeader margin="10px 0" :fontSize="styled(`subHeaderFS`)"
      >Select Sounds</StyledSubHeader
    >
    <StyledDiv
      flexDirection="row"
      margin="0 0 15px 0"
      flexWrap="wrap"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <StyledDiv
        justifyContent="flex-start"
        class="radioBoxes"
        width="33%"
        flexDirection="row"
        maxHeight="150px"
        minWidth="300px"
        v-for="single of phonemeList"
        :key="single.id * Math.random()"
      >
        <StyledSubHeader margin="0 10px 0 0">
          {{ single.title }}
        </StyledSubHeader>
        <Checkbox
          :checked="amIChecked(item)"
          recommender="true"
          v-for="item of single.grapheme"
          :key="item.value"
          v-model="selectedPhoneme"
          :passedFunc="handlePhonemeSelection"
          passedName="wordLength"
          :item="item"
          :passedTitle="item.title"
          :passedValue="item.value"
        />
      </StyledDiv>
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
    amIChecked(e) {
      return this.selectedPhoneme.some(s => s.value === e.value);
    },
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
