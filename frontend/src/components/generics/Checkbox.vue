<template>
  <StyledDiv
    :flexDirection="recommender ? 'column' : 'row'"
    :margin="recommender ? '0 5px' : '5px 0'"
    :height="recommender ? '30px' : null"
    :width="recommender ? 'initial' : null"
  >
    <StyledText>{{ passedTitle }}</StyledText>
    <input
      checked="checked"
      type="checkbox"
      name="passedName"
      v-model="checked"
      :value="passedValue"
      @change="passedFunc(item)"
    >
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
    recommender: { type: String, required: false },
    passedValue: { type: String, required: true },
    passedTitle: { type: String, required: true },
    passedName: { type: String, required: true },
    passedFunc: { type: Function, required: true },
    checked: { type: Boolean, required: false },
    item: { type: Object, required: true }
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
