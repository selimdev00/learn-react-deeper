import { StyledButton, StyledText } from "styles/TestBlockStyles";
import MoneyProvider from "components/MoneyProvider";

const Person = ({ name, money, addMoney }) => {
  return (
    <>
      <StyledText>
        {name} has ${money}
      </StyledText>

      <StyledButton onClick={addMoney}>Add money</StyledButton>
    </>
  );
};

export default MoneyProvider(Person);
