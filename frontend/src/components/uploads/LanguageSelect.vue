<template>
  <StyledDiv
    :border="recommender ? styled(`border`) : null"
    :borderRadius="recommender ? '10px' : null"
    :margin="recommender ? '5px' : null"
    :width="recommender ? '20%' : null"
    :height="recommender ? '100%' : null"
    :minWidth="recommender ? '210px' : null"
  >
    <StyledSubHeader :fontSize="styled(`subHeaderFS`)">
      {{ passedTitle }}
    </StyledSubHeader>
    <select
      style="line-height: 1.5; padding: 0 5px"
      v-model="selectedLanguage"
      @input="
        event => {
          $emit('languageSelection', event.target.value);
        }
      "
    >
      <option disabled>Select a Language</option>
      <option
        class="single-option"
        v-for="option in languages"
        :value="option.id"
        :key="option.value"
        >{{ option.name }}</option
      >
    </select>
  </StyledDiv>
</template>

<script>
import { StyledSubHeader, StyledDiv, ReadStyleGuide } from "../styled/index";

export default {
  components: { StyledSubHeader, StyledDiv },
  data() {
    return {
      selectedLanguage: null
    };
  },
  props: {
    recommender: {
      type: Boolean,
      required: false
    },
    passedTitle: {
      type: String,
      required: false
    },
    value: null,
    languages: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.selectedLanguage = this.value;
  },
  methods: {
    styled(e) {
      if (e === "border") {
        return `2px solid ${ReadStyleGuide.color.lightBlue}`;
      } else if (e === "subHeaderFS") {
        return ReadStyleGuide.font.size.mediumSmall;
      }
    }
  },
  watch: {
    value: function(newValue) {
      this.selectedLanguage = newValue;
    }
  }
};
</script>

<style>
.input-wrap {
  width: 50%;
}
select {
  width: 50%;
  padding: 5px;
  line-height: 1;
  font-size: 20px;
  text-align: center;
  border: 0;
  border-radius: 5px;
  height: 34px;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #ddd;
  -webkit-appearance: none;
  background-position-x: 95%;
}
.single-option {
  font-size: 16px;
}
</style>
