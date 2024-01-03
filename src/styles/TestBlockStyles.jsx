import styled from "styled-components";

const color = "purple";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: 14px;
  padding: 2em;
`;

const StyledTitle = styled.h1`
  font-size: 3em;
  text-align: center;
  color: ${color};
`;

const StyledButton = styled.button`
  background-color: ${color};
  color: white;
  font-size: 1.5em;
  display: inline-block;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid ${color};
  border-radius: 3px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: ${color};
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: ${color};
`;

const StyledHighlightedText = styled.span`
  color: green;
  font-weight: bold;
`;

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: 14px;
`;

export {
  StyledWrapper,
  StyledTitle,
  StyledButton,
  StyledText,
  StyledHighlightedText,
  StyledBlock,
};
