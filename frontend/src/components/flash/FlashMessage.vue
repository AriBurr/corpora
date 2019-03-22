<template>
  <StyledDiv
    position="absolute"
    bottom="5%"
    right="0"
    width="30%"
    height="15%"
    padding="0 10px"
    :backgroundColor="styled(`bg`)"
    class="wrapper"
    v-if="messageToDisplay"
  >
    <StyledText v-if="messageToDisplay && messageToDisplay.status === 201">
      <span style="fontWeight: 900">{{ messageToDisplay.message }}</span>
      <br />Successfully Uploaded.
    </StyledText>
    <StyledText v-if="messageToDisplay && messageToDisplay.status !== 201">
      <span style="fontWeight: 900">{{ messageToDisplay.message }}</span>
      <br />Failed to Upload.
    </StyledText>
  </StyledDiv>
</template>

<script>
import { mapState } from "vuex";
import { StyledDiv } from "../styled/StyledDiv.js";
import { StyledText } from "../styled/StyledText.js";
import ReadStyleGuide from "../../styles/ReadStyleGuide.js";
export default {
  components: { StyledDiv, StyledText },
  data() {
    return {
      messageToDisplay: null
    };
  },
  mounted() {
    this.$store.subscribe(m => {
      this.messageToDisplay = m.payload;
    });
  },
  watch: {
    messageToDisplay: function(nV) {
      setTimeout(() => {
        this.$store.commit("removeFlash");
      }, 3000);
    }
  },
  methods: {
    styled(e) {
      if (e === "bg") {
        if (this.messageToDisplay.status === 201)
          return ReadStyleGuide.color.lightGreen;
        else return ReadStyleGuide.color.lightRed;
      }
    }
  }
};
</script>

<style></style>
