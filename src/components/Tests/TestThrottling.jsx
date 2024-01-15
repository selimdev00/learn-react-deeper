import {
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "styles/TestBlockStyles";
import { useRef, useState } from "react";

function throttle(func, duration) {
  let shouldWait = false;

  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;

      setTimeout(function () {
        shouldWait = false;
      }, duration);
    }
  };
}

export default function TestThrottling() {
  const [list, setList] = useState([]);
  const [clickTimes, setClickTimes] = useState(0);

  const func = useRef(
    throttle(() => {
      setList((prevState) => [...prevState, Date.now()]);
    }, 1000),
  );

  function handleClick() {
    setClickTimes((prevState) => prevState + 1);

    func.current();
  }

  return (
    <StyledWrapper>
      <StyledTitle>Throttling (not react topic)</StyledTitle>

      <StyledText>So, throttle function is outside of component</StyledText>

      <StyledText>
        But the function handles pushing data into the list is inside of
        component defined with{" "}
        <StyledHighlightedText>useRef</StyledHighlightedText>, so this function
        is not re-defined on re-render
      </StyledText>

      <StyledButton onClick={handleClick}>Click to call</StyledButton>

      <StyledText>Click times: {clickTimes}</StyledText>

      <StyledText>Actual function execution times: {list.length}</StyledText>
    </StyledWrapper>
  );
}
