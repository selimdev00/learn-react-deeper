import { createRef, useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/Theme";

import {
  StyledBlock,
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "../styles/TestBlockStyles";

const name = "Function Component";

function TestFunctionComponent(props) {
  const theme = useContext(ThemeContext);

  const [count, setCount] = useState(0);
  const [serverUrl, setServerUrl] = useState("http://localhost:3000");
  const [roomId, setRoomId] = useState(1);

  const roomRef = createRef();
  const serverRef = createRef();

  const setupConnection = () => {
    console.log(
      `✅[${name}]: Connected to server: ${serverUrl}, room: ${roomId}`,
    );
  };

  const cancelConnection = () => {
    console.log(
      `❌[${name}]: Disconnected from server: ${serverUrl}, room: ${roomId}`,
    );
  };

  useEffect(() => {
    setupConnection();

    return () => {
      cancelConnection();
    };
  }, [roomId, serverUrl]);

  return (
    <StyledWrapper>
      <StyledText>
        Reactive values handled with{" "}
        <StyledHighlightedText as={"pre"}>useEffect</StyledHighlightedText>
        <p>-</p>
        <StyledHighlightedText as={"pre"}>
          componentDidMount, componentDidUpdate, componentDidUnmount
        </StyledHighlightedText>
        <p>takes more code and less developer friendly</p>
      </StyledText>

      <StyledBlock>
        <StyledText>Server:</StyledText>

        <input ref={serverRef} id="server" type="text" />

        <StyledButton onClick={() => setServerUrl(serverRef.current.value)}>
          Apply server
        </StyledButton>
      </StyledBlock>

      <StyledBlock>
        <StyledText>Room:</StyledText>
        <select
          ref={roomRef}
          value={roomId}
          onChange={() => setRoomId(roomRef.current.value)}
        >
          <option value="1">General</option>
          <option value="2">Develops</option>
          <option value="3">Designers</option>
        </select>
      </StyledBlock>

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
