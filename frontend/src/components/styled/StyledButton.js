import styled from "vue-styled-components";
import ReadStyleGuide from "../../styles/ReadStyleGuide";
import { themeProps } from "./ThemeProps";

export const sButton = styled("button", themeProps)`
  border-radius: ${props => props.borderRadius || "5px"};
  padding: ${props => props.padding || "5px 20px"};
  width: ${props => props.width || "initial"};
  background-color: ${props =>
    props.backgroundColor || ReadStyleGuide.color.white};
  border: ${props =>
    `2px solid ${
      props.borderColor ? props.borderColor : ReadStyleGuide.color.lightBlue
    }`};
  color: ${props => props.color || ReadStyleGuide.color.darkBlue};
  font-size: ${props => props.fontSize || ReadStyleGuide.font.size.mediumSmall};
  ${props => (props.fontWeight ? `font-weight: ${props.fontWeight}` : null)};
  ${props => (props.margin ? `margin: ${props.margin}` : null)};
  ${props => (props.height ? `height: ${props.height}` : "initial")};
  ${props => (props.minWidth ? `min-width: ${props.minWidth}` : null)};
  &:hover {
    cursor: ${props => props.cursor || "pointer"};
    box-shadow: ${props =>
      props.boxShadow || `0px 0px 10px 0px ${ReadStyleGuide.color.boxShadow}`};
    filter: ${props => props.hoverBrightness};
    transform: ${props => props.hoverScale};
  }
`;
