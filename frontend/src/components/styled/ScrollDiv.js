import styled from "vue-styled-components";
import { ReadStyleGuide } from ".";
import { themeProps } from "./ThemeProps";

export const scrollDiv = styled("div", themeProps)`
  padding-bottom: ${props => props.paddingBottom || "30px"};
  width: ${props => props.width};
  margin: ${props => props.margin};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  display: block;
  overflow-y: ${props => props.overflowY || "scroll"};
  overflow-x: ${props => props.overflowX};

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.trackColor || ReadStyleGuide.color.darkBlue};
    border: 2px solid ${props => props.thumbColor || ReadStyleGuide.color.white};
    border-radius: 5px 0 0 5px;
    /* outline: 1px solid slategrey; */
  }
`;
