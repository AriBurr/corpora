<template>
  <StyledDiv
    width="50%"
    flexDirection="row"
    justifyContent="space-between"
    margin="10px auto"
  >
    <StyledButton
      :borderColor="styles(`buttonColor`)"
      :color="styles(`text`)"
      v-on:click="addFiles()"
      width="100%"
      >Add Files</StyledButton
    >
    <input
      class="inputFile"
      type="file"
      id="file"
      ref="file"
      @change="
        event => {
          $emit('handleFileUpload', event.target.files);
        }
      "
      multiple
    />
  </StyledDiv>
</template>

<script>
import { StyledButton, StyledDiv, ReadStyleGuide } from "../styled/index";

export default {
  components: { StyledButton, StyledDiv },
  props: [
    "selectedLanguage",
    "handleFileUpload",
    "removeUploadedFile",
    "submitFile",
    "filesToUpload"
  ],
  methods: {
    addFiles() {
      this.$refs.file.click();
    },
    styles(i) {
      if (i === "text") {
        return ReadStyleGuide.color.darkBlue;
      } else if (i === "buttonColor") {
        return ReadStyleGuide.color.lightOrange;
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  justify-content: flex-start;
}
</style>
