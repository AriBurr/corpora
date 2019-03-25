<template>
  <StyledDiv width="50%" margin="20px 0">
    <StyledText padding="0 0 0 60px" width="100%" textAlign="left"
      >File Name</StyledText
    >
    <StyledDiv
      flexDirection="row"
      v-for="(s, key) in filesToUpload"
      class="single-file"
      :key="key"
      :backgroundColor="styled(`bg`)"
      height="50px"
      width="100%"
      justifyContent="space-between"
      margin="2px auto"
      padding="0 20px"
    >
      {{ s.title }}
      <StyledButton
        :borderColor="styled(`border`)"
        v-on:click="removeUploadedFile(key)"
        >Delete</StyledButton
      >
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import {
  StyledDiv,
  StyledText,
  StyledButton,
  ReadStyleGuide
} from "../styled/index.js";

export default {
  components: { StyledDiv, StyledText, StyledButton },
  props: ["filesToUpload", "removeUploadedFile"],
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
