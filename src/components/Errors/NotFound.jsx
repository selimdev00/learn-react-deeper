import styled from "styled-components";
import { StyledButton, StyledTitle } from "styles/TestBlockStyles";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  font-size: 14px;
  height: 100vh;
`;

export default function NotFound() {
  return (
    <StyledWrapper>
      <StyledTitle>404 Not Found</StyledTitle>

      <StyledButton as={"a"} href={"/"}>
        Go home
      </StyledButton>
    </StyledWrapper>
  );
}
