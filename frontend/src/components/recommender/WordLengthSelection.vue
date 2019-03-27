<template>
  <StyledDiv justifyContent="flex-start" width="75%">
    <StyledSubHeader margin="10px 0" :fontSize="styled(`font-mediumSmall`)"
      >Word Length</StyledSubHeader
    >
    <StyledDiv flexDirection="row" flexWrap="wrap">
      <StyledDiv
        v-for="(single, i) in lengthButtons"
        :key="i"
        :backgroundColor="scopedStyle('bg', single)"
        cursor="pointer"
        hoverBrightness="brightness(90%)"
        width="150px"
        height="50px"
        margin="1px"
        borderRadius="5px"
        @click="single.func"
      >
        <StyledText
          lineHeight="0"
          :fontWeight="styled(`fontWeight-sevenHundred`)"
          :color="scopedStyle(`textC`, single)"
          >{{ single.title }}</StyledText
        >
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import {
  StyledDiv,
  StyledSubHeader,
  StyledText,
  ReadStyleGuide
} from "../styled/index.js";
import StyleCompiler from "../../helpers/StyleCompiler";
export default {
  components: { StyledDiv, StyledSubHeader, StyledText },
  data() {
    return {
      lengthButtons: [
        { title: "2 Letters", func: () => this.handleWordLength(2), id: 2 },
        { title: "3 Letters", func: () => this.handleWordLength(3), id: 3 },
        { title: "4 Letters", func: () => this.handleWordLength(4), id: 4 },
        { title: "5 Letters", func: () => this.handleWordLength(5), id: 5 },
        { title: "6 Letters", func: () => this.handleWordLength(6), id: 6 },
        { title: "7 Letters", func: () => this.handleWordLength(7), id: 7 },
        { title: "8+ Letters", func: () => this.handleWordLength(8), id: 8 }
      ]
    };
  },
  props: ["selectedWordLength", "handleWordLength"],
  methods: {
    styled(e) {
      return StyleCompiler(e);
    },
    scopedStyle(e, l) {
      if (e === "textC") {
        if (this.selectedWordLength.includes(l.id)) {
          return ReadStyleGuide.color.SOSBlue;
        } else {
          return ReadStyleGuide.color.SOSBlue;
        }
      } else if (e === "bg")
        if (this.selectedWordLength.includes(l.id)) {
          return ReadStyleGuide.color.lightGreen;
        } else {
          return ReadStyleGuide.color.white;
        }
    }
  }
};

// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="2 Letters"
//   passedValue="2"
//   type="radio"
// />
// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="3 Letters"
//   passedValue="3"
//   type="radio"
// />
// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="4 Letters"
//   passedValue="4"
//   type="radio"
// />
// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="5 Letters"
//   passedValue="5"
//   type="radio"
// />
// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="6 Letters"
//   passedValue="6"
//   type="radio"
// />
// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="7 Letters"
//   passedValue="7"
//   type="radio"
// />
// <RadioButton
//   v-model="selectedWordLength"
//   passedWidth="50%"
//   :passedFunc="handleWordLength"
//   passedName="wordLength"
//   passedTitle="8+ Letters"
//   passedValue="8"
//   type="radio"
// />
</script>

<style></style>
