<template>
  <StyledDiv width="50%" height="200px" marginTop="30px">
    <StyledSubHeader>Enter Language Name:</StyledSubHeader>
    <StyledInput placeholder="Type Name.." v-model="languageName" type="text"/>
    <StyledButton
      :backgroundColor="styled('lightBlue')"
      :color="styled('white')"
      margin="20px 0"
      @click="takeCareOfBusiness"
    >Save</StyledButton>
  </StyledDiv>
</template>

<script>
import {
  StyledDiv,
  StyledSubHeader,
  StyledButton,
  StyledInput
} from "../styled";
import StyleCompiler from "../../helpers/StyleCompiler";

export default {
  components: { StyledDiv, StyledSubHeader, StyledButton, StyledInput },
  props: ["handleAddLanguage"],
  data() {
    return {
      languageName: ""
    };
  },
  methods: {
    styled(e) {
      return StyleCompiler(e);
    },
    takeCareOfBusiness() {
      this.handleAddLanguage(this.languageName);
    }
  }
};
</script>

<style>
</style>
