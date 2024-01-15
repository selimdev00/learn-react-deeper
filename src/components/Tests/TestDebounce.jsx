import {
  StyledButton,
  StyledText,
  StyledTitle,
  StyledWrapper,
  StyledHighlightedText,
} from "styles/TestBlockStyles";
import { useRef, useState } from "react";

function debounce(func, duration) {
  let timeout;

  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, duration);
  };
}

export default function TestDebounce() {
  const [list, setList] = useState([]);
  const [clickTimes, setClickTimes] = useState(0);

  const func = useRef(
    debounce(() => {
      setList((prevState) => [...prevState, Date.now()]);
    }, 500),
  );

  function handleClick() {
    setClickTimes((prevState) => prevState + 1);

    func.current();
  }

  return (
    <StyledWrapper>
      <StyledTitle>TestDebounce (not react topic)</StyledTitle>

      <StyledText>So, debounce function is outside of component</StyledText>

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
