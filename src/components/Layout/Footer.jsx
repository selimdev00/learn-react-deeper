import styled from "styled-components";

const color = "purple";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  font-size: 14px;
  padding: 2em;
  background-color: ${color};
  color: white;
`;
export default function Footer() {
  return (
    <StyledWrapper>
      <h1>Footer</h1>
    </StyledWrapper>
  );
}
