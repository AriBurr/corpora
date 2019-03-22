<template>
  <div class="uploader-wrap">
    <input
      class="uploadInput"
      placeholder="Title"
      v-model="urlTitle"
      type="text"
    />
    <input
      class="uploadInput"
      placeholder="URL"
      v-model="urlItem"
      type="text"
    />
    <StyledButton
      @click="
        event => {
          $emit('handleURLUpload', urlItem, urlTitle, resetStrings);
        }
      "
      margin="20px 0 0 0"
      :borderColor="styled(`border`)"
      width="90%"
      >Upload</StyledButton
    >
  </div>
</template>

<script>
import { StyledButton } from "../styled/StyledButton.js";
import ReadStyleGuide from "../../styles/ReadStyleGuide.js";
export default {
  components: { StyledButton },
  data() {
    return {
      urlItem: null,
      urlTitle: null
    };
  },
  methods: {
    resetStrings() {
      this.urlItem = "";
      this.urlTitle = "";
    },
    styled(e) {
      if (e === "border") {
        return ReadStyleGuide.color.lightGreen;
      }
    }
  }
};
</script>

<style>
.uploadInput {
  width: 75%;
  text-align: center;
  margin-top: 20px;
  padding: 0 50px;
  font-size: 16px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid gainsboro;
  box-shadow: 0 0 15px 5px gainsboro;
}
.submitButton {
  width: 300px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
  border: 2px solid pink;
  border: 2px solid gainsboro;
  box-shadow: 0 0 1px 1px gainsboro;
}
.submitButton:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px 5px gainsboro;
}
</style>
