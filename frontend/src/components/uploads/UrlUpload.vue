<template>
  <div class="uploader-wrap">
    <StyledInput class="uploadInput" placeholder="Title" v-model="urlTitle" type="text"/>
    <StyledInput class="uploadInput" placeholder="URL" v-model="urlItem" type="text"/>
    <StyledButton
      @click="
        event => {
          $emit('handleURLUpload', urlItem, urlTitle, resetStrings);
        }
      "
      margin="20px 0 0 0"
      :borderColor="styled(`border`)"
      width="90%"
    >Upload</StyledButton>
  </div>
</template>

<script>
import { StyledButton, ReadStyleGuide, StyledInput } from "../styled/index";

export default {
  components: { StyledButton, StyledInput },
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
