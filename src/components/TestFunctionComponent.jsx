import { useContext } from "react";
import ThemeContext from "../contexts/Theme";

import {
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "../styles/TestBlockStyles";

function TestFunctionComponent() {
  const theme = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <StyledTitle>Test</StyledTitle>

      <StyledText>
        So this is <StyledHighlightedText>function</StyledHighlightedText>{" "}
        component
      </StyledText>

      <StyledText>
        Theme context: <StyledHighlightedText>{theme}</StyledHighlightedText>{" "}
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

      <StyledButton>Click</StyledButton>
    </StyledWrapper>
  );
}

export default TestFunctionComponent;
