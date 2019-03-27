import styled from "vue-styled-components";
import { themeProps } from "./ThemeProps";

export const sDiv = styled("div", themeProps)`
  align-items: ${props => props.alignItems || "center"};
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf}` : null)};
  ${props =>
    props.backgroundColor
      ? `background-color: ${props.backgroundColor}`
      : null};
  ${props => (props.background ? props.background : null)};
  ${props =>
    props.backgroundImage
      ? `background-image: url(${props.backgroundImage}`
      : null}
  background-repeat: ${props => props.backgroundRepeat || "no-repeat"};
  ${props =>
    props.backgroundAttachment
      ? `background-attachment: ${props.backgroundAttachment}`
      : null};
  background-position: ${props => props.backgroundPosition || "center center"};
  ${props =>
    props.backgroundSize ? `background-size: ${props.backgroundSize}` : null};
  ${props => (props.border ? `border: ${props.border}` : null)};
  ${props => (props.borderTop ? `border-top: ${props.borderTop}` : null)};
  ${props =>
    props.borderBottom ? `border-bottom: ${props.borderBottom}` : null};
  ${props => (props.borderRight ? `border-right: ${props.borderRight}` : null)};
  ${props => (props.borderLeft ? `border-left: ${props.borderLeft}` : null)};
  ${props =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : null};
  ${props => (props.bottom ? `bottom: ${props.bottom}` : null)};
  ${props => (props.boxShadow ? `box-shadow: ${props.boxShadow}` : null)};
  display: ${props => props.display || "flex"};
  ${props => (props.flex ? `flex: ${props.flex}` : null)};
  flex-direction: ${props => props.flexDirection || "column"};
  ${props => (props.flexWrap ? `flex-wrap: ${props.flexWrap}` : null)};
  height: ${props => props.height || "initial"};
  justify-content: ${props => props.justifyContent || "center"};
  ${props => (props.left ? `left: ${props.left}` : null)};
  ${props => (props.margin ? `margin: ${props.margin}` : null)};
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}` : null)};
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}` : null};
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}` : null)};
  ${props => (props.marginRight ? `margin-right: ${props.marginRight}` : null)};
  ${props => (props.maxHeight ? `max-height: ${props.maxHeight}` : null)};
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth}` : null)};
  ${props => (props.minHeight ? `min-height: ${props.minHeight}` : null)};

  ${props => (props.minWidth ? `min-width: ${props.minWidth}` : null)};
  ${props => (props.opacity ? `opacity: ${props.opacity}` : null)};
  ${props => (props.order ? `order: ${props.order}` : null)};
  ${props => (props.overflow ? `overflow: ${props.overflow}` : null)};
  ${props => (props.position ? `position: ${props.position}` : null)};
  ${props => (props.padding ? `padding: ${props.padding}` : null)};
  ${props => (props.right ? `right: ${props.right}` : null)};
  ${props => (props.top ? `top: ${props.top}` : null)};
  width: ${props => props.width || "100%"};
  ${props => (props.zIndex ? `z-index: ${props.zIndex} ` : null)};

  &:hover {
    transform: ${props => props.transformation || null};
    background: ${props => props.hoverBackgroundColor};
    filter: ${props => props.hoverBrightness || null};
    background-size: ${props => props.hoverBackgroundSize};
    cursor: ${props => props.cursor};
    border-radius: ${props => props.hoverBorderRadius};
    color: ${props => props.hoverColor};
  }
`;

// ***************************** OLD STYLED COMPONENTS *******************************
// ***************************** Keeping for the time being (3/24/19) *******************************

// import styled from "vue-styled-components";
// // import ReadStyleGuide from "../../styles/ReadStyleGuide";
// import { themeProps } from "./ThemeProps";

// export const sDiv = styled("div", themeProps)`

//   align-self: ${props => props.alignSelf || null};
//   background-color: ${props => props.backgroundColor || null};
//   background: ${props => props.background};
//   background-image: url(${props => props.backgroundImage || null});

//   background-attachment: ${props => props.backgroundAttachment || null};

//   background-size: ${props => props.backgroundSize || null};
//   border: ${props => props.border};
//   border-top: ${props => props.borderTop || null};
//   border-bottom: ${props => props.borderBottom || null};
//   border-right: ${props => props.borderRight || null};
//   border-left: ${props => props.borderLeft || null};
//   border-radius: ${props => props.borderRadius || null};
//   bottom: ${props => props.bottom};
//   box-shadow: ${props => props.boxShadow || null};

//   flex: ${props => props.flex};

//   flex-wrap: ${props => props.flexWrap || null};

//   left: ${props => props.left};
//   margin: ${props => props.margin};
//   max-height: ${props => props.maxHeight || null};
//   max-width: ${props => props.maxWidth || null};
//   min-height: ${props => props.minHeight || null};
//   opacity: ${props => props.opacity || null};
//   order: ${props => props.order};
//   overflow: ${props => props.overflow};
//   position: ${props => props.position};
//   padding: ${props => props.padding};
//   right: ${props => props.right};
//   top: ${props => props.top};

//   z-index: ${props => props.zIndex || null};

//   &:hover {
//     transform: ${props => props.transformation || null};
//     background: ${props => props.hoverBackgroundColor};
//     filter: ${props => props.hoverBrightness || null};
//     background-size: ${props => props.hoverBackgroundSize};
//     cursor: ${props => props.cursor};
//     border-radius: ${props => props.hoverBorderRadius};
//     color: ${props => props.hoverColor};
//   }
// `;
