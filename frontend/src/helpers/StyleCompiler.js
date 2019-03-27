import ReadStyleGuide from "../styles/ReadStyleGuide";

function StyleCompiler(e) {
  if (e === "buttonColor") {
    return ReadStyleGuide.color.white;
  } else if (e === "buttonBG") {
    return ReadStyleGuide.color.lightGreen;
  } else if (e === "toolkitButt") {
    return `2px solid ${ReadStyleGuide.color.lightRed}`;
  } else if (e === "lightGray") {
    return ReadStyleGuide.color.lightGray;
  } else if (e === "lightGreen") {
    return ReadStyleGuide.color.lightGreen;
  } else if (e === "lightBlue") {
    return ReadStyleGuide.color.lightBlue;
  } else if (e === "lightRed") {
    return ReadStyleGuide.color.lightRed;
  } else if (e === "lightOrange") {
    return ReadStyleGuide.color.lightOrange;
  } else if (e === "brightYellow") {
    return ReadStyleGuide.color.brightYellow;
  } else if (e === "softPurple") {
    return ReadStyleGuide.color.softPurple;
  } else if (e === "SOSBlue") {
    return ReadStyleGuide.color.SOSBlue;
  } else if (e === "white") {
    return ReadStyleGuide.color.white;
  } else if (e === "darkBlue") {
    return ReadStyleGuide.color.darkBlue;
  } else if (e === "fontSize-finePrint") {
    return ReadStyleGuide.font.size.finePrint;
  } else if (e === "fontSize-tiny") {
    return ReadStyleGuide.font.size.tiny;
  } else if (e === "fontSize-small") {
    return ReadStyleGuide.font.size.small;
  } else if (e === "fontSize-mediumSmall") {
    return ReadStyleGuide.font.size.mediumSmall;
  } else if (e === "fontSize-medium") {
    return ReadStyleGuide.font.size.medium;
  } else if (e === "fontSize-mediumLarge") {
    return ReadStyleGuide.font.size.mediumLarge;
  } else if (e === "fontSize-large") {
    return ReadStyleGuide.font.size.large;
  } else if (e === "fontSize-huge") {
    return ReadStyleGuide.font.size.huge;
  } else if (e === "fontSize-massive") {
    return ReadStyleGuide.font.size.massive;
  } else if (e === "fontWeight-oneHundred") {
    return ReadStyleGuide.font.weight.oneHundred;
  } else if (e === "fontWeight-twoHunderd") {
    return ReadStyleGuide.font.weight.twoHunderd;
  } else if (e === "fontWeight-threeHunded") {
    return ReadStyleGuide.font.weight.threeHunded;
  } else if (e === "fontWeight-fourHundred") {
    return ReadStyleGuide.font.weight.fourHundred;
  } else if (e === "fontWeight-fiveHundred") {
    return ReadStyleGuide.font.weight.fiveHundred;
  } else if (e === "fontWeight-sixHundred") {
    return ReadStyleGuide.font.weight.sixHundred;
  } else if (e === "fontWeight-sevenHundred") {
    return ReadStyleGuide.font.weight.sevenHundred;
  } else if (e === "fontWeight-eightHundred") {
    return ReadStyleGuide.font.weight.eightHundred;
  } else if (e === "fontWeight-nineHundred") {
    return ReadStyleGuide.font.weight.nineHundred;
  }
}

export default StyleCompiler;
