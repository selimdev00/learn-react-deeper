import { useContext } from "react";
import ThemeContext from "../contexts/Theme";

import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

const StyledButton = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 2em;
  display: block;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: palevioletred;
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledHighlightedText = styled.span`
  color: green;
  font-weight: bold;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 30px;
`;

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

      <StyledButton>Click</StyledButton>
    </StyledWrapper>
  );
}

export default TestFunctionComponent;
