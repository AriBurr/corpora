import styled from "vue-styled-components";
import ReadStyleGuide from "../../styles/ReadStyleGuide";
import { themeProps } from "./ThemeProps";
import { media } from "./MediaSizes";

export const sInput = styled("input", themeProps)`
  width: ${props => props.width || "50%"};
  height: ${props => props.height || "50px"};
  border-radius: ${props => props.borderRadius || "10px"};
  text-align: ${props => props.textAlign || "center"};
  margin: ${props => props.margin || "0px"};
  margin-top: ${props => props.marginTop || "20px"};
  box-shadow: ${props =>
    props.boxShadow
      ? props.boxShadow
      : `0 0 10px 3px ${ReadStyleGuide.color.lightGray}`};
  border: ${props =>
    props.border ? props.border : `2px solid ${ReadStyleGuide.color.lightGray}`}
  color: ${props => props.color || ReadStyleGuide.color.darkBlue};
  padding: ${props => props.padding || "0 50px"};
  font-family: ${props => props.fontFamily || ReadStyleGuide.font.family.chivo};
  font-size: ${props => props.fontSize || ReadStyleGuide.font.size.mediumSmall};

  &:hover {
    color: ${props => props.hoverColor || null};
    cursor: ${props => props.cursorType || null};
}

  ${media.desktop`font-size: ${props => props.desktopFontSize || null};`}
  ${media.tablet`font-size: ${props => props.tabletFontSize || null};`}
  ${media.phone`font-size: ${props => props.phoneFontSize || null};`}
`;
