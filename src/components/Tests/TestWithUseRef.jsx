import { useRef, useState } from "react";
import {
  StyledWrapper,
  StyledTitle,
  StyledText,
  StyledHighlightedText,
  StyledButton,
  StyledBlock,
} from "styles/TestBlockStyles";

export default function TestWithUseRef() {
  const count = useRef(0);

  function incrementCount() {
    count.current++;

    alert(
      `Component does not re-render, but value in useRef is updated: ${count.current}`,
    );
  }

  const intervalRef = useRef();
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState();
  function startTimer() {
    if (intervalRef.current) {
      return;
    }

    if (!startTime) {
      setStartTime(Date.now());
    }

    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  const secondsPassed = (now - startTime) / 1000;

  return (
    <StyledWrapper>
      <StyledTitle>Usage of </StyledTitle>
      <StyledHighlightedText>
        <pre>useRef</pre>
      </StyledHighlightedText>

      <StyledText>Count: {count.current}</StyledText>

      <StyledButton onClick={incrementCount}>Add</StyledButton>

      <StyledTitle>Stop Watch</StyledTitle>

      <StyledBlock>
        <StyledText>Seconds passed: {secondsPassed}</StyledText>

        <StyledButton onClick={startTimer}>Start</StyledButton>

        <StyledButton onClick={stopTimer}>Stop</StyledButton>
      </StyledBlock>
    </StyledWrapper>
  );
}
