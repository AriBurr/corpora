<template>
  <StyledDiv>
    <StyledHeader>Recently Added</StyledHeader>

    <StyledDiv
      flexDirection="row"
      v-for="(s, key) in recentlyAdded"
      :key="key"
      :backgroundColor="styled(`bg`)"
      height="initial"
      width="100%"
      margin="2px auto"
      padding="0 20px"
    >
      <StyledText textAlign="center">{{ s.title }}</StyledText>
    </StyledDiv>
    <StyledText v-if="recentlyAdded.length === 0"
      >No Files Uploaded Yet</StyledText
    >
  </StyledDiv>
</template>

<script>
import {
  StyledDiv,
  StyledText,
  StyledHeader,
  ReadStyleGuide
} from "../styled/index";

export default {
  components: { StyledDiv, StyledText, StyledHeader },
  props: ["recentlyAdded", "removeUploadedFile"],
  methods: {
    styled(e) {
      if (e === "border") {
        return ReadStyleGuide.color.lightRed;
      }
    }
  }
};
</script>

<style>
.list-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
}
.single-file {
  display: flex;
  height: 50px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: 2px auto;
  border: 2px solid #c6c8c7;
  padding: 0 20px;
}
.inputFile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: -500px;
  z-index: -1;
}
.remove-file {
  width: 20%;
  background-color: lightskyblue;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
