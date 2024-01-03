import { Component } from "react";

import ThemeContext from "../contexts/Theme";

import {
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "../styles/TestBlockStyles";

class TestClassComponent extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = "button-" + theme;

    return (
      <StyledWrapper>
        <StyledTitle>Test</StyledTitle>

        <StyledText>
          So this is <StyledHighlightedText>class</StyledHighlightedText>{" "}
          component
        </StyledText>

        <StyledText>
          Theme context: <StyledHighlightedText>{theme}</StyledHighlightedText>
        </StyledText>

        <StyledText>
          Styled with:{" "}
          <StyledHighlightedText>styled-components</StyledHighlightedText>{" "}
          exported with a{" "}
          <StyledHighlightedText>single exported file</StyledHighlightedText>
        </StyledText>

        <StyledText>
          And that's <StyledHighlightedText>cool</StyledHighlightedText>
        </StyledText>

        <StyledButton className={className}>Click</StyledButton>
      </StyledWrapper>
    );
  }
}

export default TestClassComponent;
