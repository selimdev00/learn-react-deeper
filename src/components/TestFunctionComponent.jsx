import { useContext, useState } from "react";
import ThemeContext from "../contexts/Theme";

import {
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
  StyledBlock,
} from "../styles/TestBlockStyles";

function TestFunctionComponent(props) {
  const theme = useContext(ThemeContext);

  const [count, setCount] = useState(0);

  return (
    <StyledWrapper>
      <StyledTitle>Test (function component)</StyledTitle>

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

      <StyledText>
        Props:{" "}
        {Object.keys(props).map((key) => (
          <StyledHighlightedText key={key}>
            {props[key]} |{" "}
          </StyledHighlightedText>
        ))}
      </StyledText>

      <StyledBlock>
        <StyledText>State usage:</StyledText>
        <StyledHighlightedText>{count}</StyledHighlightedText>
        <StyledButton
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </StyledButton>
        <StyledButton
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </StyledButton>
      </StyledBlock>
    </StyledWrapper>
  );
}

export default TestFunctionComponent;
