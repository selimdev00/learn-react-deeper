import {
  StyledWrapper,
  StyledTitle,
  StyledHighlightedText,
  StyledButton,
} from "styles/TestBlockStyles";

import useAuth from "hooks/useAuth";

export default function TestCustomHook() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <StyledWrapper>
      <StyledTitle>Usage of </StyledTitle>
      <StyledHighlightedText>
        <pre>custom hook</pre>
      </StyledHighlightedText>

      <StyledButton onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "Logout" : "Login"}
      </StyledButton>
    </StyledWrapper>
  );
}
