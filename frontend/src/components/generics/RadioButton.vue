<template>
  <StyledDiv :width="passedWidth">
    <StyledText>{{ passedTitle }}</StyledText>
    <input
      type="radio"
      name="passedName"
      v-model="uploadType"
      :value="passedValue"
      @change="passedFunc(passedValue)"
    />
  </StyledDiv>
</template>

<script>
import { StyledDiv, StyledText } from "../styled/index.js";
export default {
  components: { StyledText, StyledDiv },
  data() {
    return {
      uploadType: null
    };
  },
  props: {
    passedValue: { type: String, required: true },
    passedTitle: { type: String, required: true },
    passedName: { type: String, required: true },
    passedFunc: { type: Function, required: true },
    passedWidth: { type: String, required: false }
  },
  methods: {
    styled(e) {
      if (e === "margin") {
        return "0px auto";
      } else if (e === "width") {
        return "75%";
      } else if (e === "justifyContent") {
        return "space-around";
      }
    }
  }
};
</script>

<style scoped></style>
