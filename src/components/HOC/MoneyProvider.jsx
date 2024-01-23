import { useState } from "react";

const MoneyProvider = (PersonComponent) => {
  const NewComponent = ({ name }) => {
    const [money, setMoney] = useState(0);

    function addMoney() {
      setMoney(money + 1);
    }

    return <PersonComponent money={money} addMoney={addMoney} name={name} />;
  };

  return NewComponent;
};

export default MoneyProvider;
