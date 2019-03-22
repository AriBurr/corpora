<template>
  <div class="radio-wrap">
    <StyledSubHeader>How will you upload files?</StyledSubHeader>
    <div class="button-wrap">
      <div class="single-radio">
        <StyledText>Copy/Paste URL</StyledText>
        <input
          type="radio"
          v-model="uploadType"
          value="1"
          @change="
            event => {
              $emit('uploadTypeSelection', event.target.value);
            }
          "
        />
      </div>
      <div class="single-radio">
        <StyledText>Upload File(s)</StyledText>
        <input
          type="radio"
          v-model="uploadType"
          value="2"
          @change="
            event => {
              $emit('uploadTypeSelection', event.target.value);
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { StyledSubHeader } from "../styled/StyledSubHeader";
import { StyledText } from "../styled/StyledText";
export default {
  components: { StyledSubHeader, StyledText },
  data() {
    return {
      uploadType: null
    };
  },
  props: {
    uploadTypes: {
      type: null,
      required: true
    }
  }
};
</script>

<style>
.button-wrap {
  display: flex;
  margin: 0 auto;
  width: 75%;
  justify-content: space-around;
}
.how-will-you {
  padding: 10px 0;
}
.radio-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.single-radio {
  width: 50%;
}
</style>
