<template>
  <StyledDiv
    flexDirection="row"
    padding="10px 0"
    margin="10px 0 0 0"
    :backgroundColor="styled('brightYellow')"
  >
    <StyledDiv width="20%" borderRight="2px solid black">
      <StyledText :fontSize="styled('fontSize-mediumSmall')">Chosen Story Words</StyledText>
    </StyledDiv>
    <StyledDiv flexWrap="wrap" flexDirection="row" width="80%">
      <StyledDiv
        v-for="single in chosenWords"
        :key="single.count * Math.random()"
        cursor="pointer"
        :backgroundColor="styled(`white`)"
        hoverBrightness="brightness(90%)"
        flexDirection="row"
        :border="`2px solid ${styled('lightGray')}`"
        @click="removeSingleWord(single)"
        minWidth="100px"
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
import { StyledDiv, StyledText } from "../styled";
import StyleCompiler from "../../helpers/StyleCompiler";
export default {
  components: { StyledDiv, StyledText },
  props: ["chosenWords", "removeSingleWord"],
  methods: {
    styled(e) {
      return StyleCompiler(e);
    }
  }
};
</script>

<style></style>
