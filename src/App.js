import TestClassComponent from "./components/TestClassComponent";
import { useContext } from "react";
import ThemeContext from "./contexts/Theme";
import TestFunctionComponent from "./components/TestFunctionComponent";

import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <StyledGrid>
        <TestClassComponent />

        <TestFunctionComponent />
      </StyledGrid>
    </div>
  );
}

export default App;
