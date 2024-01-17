import {
  StyledBlock,
  StyledButton,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "styles/TestBlockStyles";

const TestStopPropagation = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Testing stop propagation (not react topic)</StyledTitle>

      <StyledText>
        So, u have to call stopPropagation function in child component to
        prevent event handler on parent component fire
      </StyledText>

      <StyledBlock
        style={{ background: "red" }}
        onClick={() => alert("u clicked on red block")}
      >
        <StyledButton
          onClick={(e) => {
            e.stopPropagation();
            alert("u clicked on play video");
          }}
        >
          Play video (with stopPropagation)
        </StyledButton>
        vs
        <StyledButton onClick={(e) => alert("u clicked on play music")}>
          Play music (without stopPropagation)
        </StyledButton>
      </StyledBlock>
    </StyledWrapper>
  );
};

export default TestStopPropagation;
