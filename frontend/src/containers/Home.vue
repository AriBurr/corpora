<template>
  <StyledDiv class="home" height="418px">
    <StyledHeader margin="0 5px" class="read-header">READ Toolkit</StyledHeader>
  </StyledDiv>
</template>

<script>
import { StyledDiv, StyledHeader } from "../components/styled/index";

export default {
  name: "home",
  components: { StyledDiv, StyledHeader }
};
</script>

<style>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
