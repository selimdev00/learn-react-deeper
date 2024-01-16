import { useEffect, useRef, useState } from "react";
import {
  StyledWrapper,
  StyledTitle,
  StyledText,
  StyledHighlightedText,
  StyledButton,
  StyledBlock,
} from "styles/TestBlockStyles";
import FormInput from "components/Form/Input";

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

  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  const renderTimes = useRef(0);

  const [x, setX] = useState(0);

  useEffect(() => {
    renderTimes.current++;
  }, [x]);

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

      <StyledBlock>
        <FormInput ref={inputRef} label="Input" placeholder={"somethings"} />

        <StyledButton onClick={focusInput}>Focus input</StyledButton>
      </StyledBlock>

      <StyledBlock>
        <StyledText>Component re-rendered: {renderTimes.current}</StyledText>

        <StyledButton onClick={() => setX(x + 1)}>Update x</StyledButton>

        <StyledText>x: {x}</StyledText>
      </StyledBlock>
    </StyledWrapper>
  );
}
