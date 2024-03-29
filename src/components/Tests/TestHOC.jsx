import { StyledWrapper, StyledTitle, StyledText } from "styles/TestBlockStyles";

import Person from "components/HOC/Person";

const TestHOC = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Testing HOC</StyledTitle>

      <StyledText>Person component wrapped with HOC (MoneyProvider)</StyledText>

      <StyledText>
        It's deprecated though, recommended to use custom hooks
      </StyledText>

      <Person name="John" />

      <Person name="Jimmy" />
    </StyledWrapper>
  );
};

export default TestHOC;
