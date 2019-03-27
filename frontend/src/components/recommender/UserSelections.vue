<template>
  <StyledDiv
    width="50%"
    margin="10px 0"
    height="100%"
    :border="`2px solid ${styled(`lightOrange`)}`"
    borderRadius="10px"
    alignItems="flex-start"
  >
    <StyledDiv
      :borderBottom="`2px solid ${styled(`darkBlue`)}`"
      width="75%"
      margin="0 auto"
    >
      <StyledSubHeader
        :fontWeight="styled(`fontWeight-sevenHundred`)"
        :fontSize="styled(`fontSize-mediumSmall`)"
        >Recommender Settings</StyledSubHeader
      >
    </StyledDiv>
    <StyledDiv
      height="30%"
      justifyContent="flex-start"
      marginLeft="5px"
      flexDirection="row"
    >
      <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)"
        >Word Length:</StyledText
      >
      <StyledText
        v-for="(single, i) in selectedWordLength"
        :key="single * Math.random()"
      >
        {{ "&nbsp;" + single
        }}{{ i !== selectedWordLength.length - 1 ? ", " : null
        }}{{ i === selectedWordLength.length - 1 ? " letters" : null }}
      </StyledText>
    </StyledDiv>
    <StyledDiv
      height="30%"
      justifyContent="flex-start"
      marginLeft="5px"
      flexDirection="row"
    >
      <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)"
        >Letters:</StyledText
      >
      <StyledDiv flexDirection="row" justifyContent="flex-start">
        <StyledText
          v-for="(single, i) in selectedLetters"
          :key="single + parseInt(Math.random())"
        >
          {{ "&nbsp;" + single
          }}{{
            selectedLetters.length > 1 && i !== selectedLetters.length - 1
              ? `, `
              : null
          }}
        </StyledText>
      </StyledDiv>
    </StyledDiv>
    <StyledDiv
      height="30%"
      justifyContent="flex-start"
      marginLeft="5px"
      flexDirection="row"
    >
      <StyledText :fontWeight="styled(`fontWeight-sevenHundred`)"
        >Sounds:</StyledText
      >
      <StyledDiv flexDirection="row" justifyContent="flex-start">
        <StyledText
          v-for="(single, i) in selectedPhoneme"
          :key="single.title + parseInt(Math.random())"
        >
          {{ "&nbsp;" + single.title
          }}{{
            selectedPhoneme.length > 1 && i !== selectedPhoneme.length - 1
              ? `, `
              : null
          }}
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
</template>

<script>
import { StyledText, StyledDiv, StyledSubHeader } from "../styled";
import StyleCompiler from "../../helpers/StyleCompiler";
export default {
  components: { StyledDiv, StyledText, StyledSubHeader },
  props: [
    "selectedLanguage",
    "selectedLetters",
    "selectedWordLength",
    "selectedPhoneme"
  ],
  methods: {
    styled(e) {
      return StyleCompiler(e);
    }
  }
};
</script>

<style></style>
