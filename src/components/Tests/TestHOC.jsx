import { StyledWrapper, StyledTitle, StyledText } from "styles/TestBlockStyles";

import Person from "components/Person";

const TestHOC = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Testing HOC</StyledTitle>

      <StyledText>Person component wrapped with HOC (MoneyProvider)</StyledText>

      <Person name="John" />

      <Person name="Jimmy" />
    </StyledWrapper>
  );
};

export default TestHOC;
