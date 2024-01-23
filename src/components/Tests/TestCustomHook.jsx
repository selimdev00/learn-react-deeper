import {
  StyledWrapper,
  StyledTitle,
  StyledHighlightedText,
  StyledButton,
  StyledText,
} from "styles/TestBlockStyles";

import useAuth from "hooks/useAuth";
import useBoolean from "hooks/useBoolean";

export default function TestCustomHook() {
  const { isAuthenticated, login, logout } = useAuth();

  const [
    person,
    { setTrue: setPersonTrue, setFalse: setPersonFalse, toggle: togglePerson },
  ] = useBoolean();

  return (
    <StyledWrapper>
      <StyledTitle>Usage of </StyledTitle>
      <StyledHighlightedText>
        <pre>custom hook</pre>
      </StyledHighlightedText>

      <StyledTitle>useAuth</StyledTitle>

      <StyledButton onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "Logout" : "Login"}
      </StyledButton>

      <StyledTitle>useBoolean</StyledTitle>

      <StyledButton onClick={setPersonTrue}>setTrue</StyledButton>

      <StyledButton onClick={setPersonFalse}>setFalse</StyledButton>

      <StyledButton onClick={togglePerson}>toggle</StyledButton>

      <StyledText>{person ? "Person is true" : "Person is false"}</StyledText>
    </StyledWrapper>
  );
}
