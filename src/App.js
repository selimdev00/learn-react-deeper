import TestClassComponent from "./components/TestClassComponent";
import { useContext, useState } from "react";
import ThemeContext from "./contexts/Theme";
import TestFunctionComponent from "./components/TestFunctionComponent";

import styled from "styled-components";
import DefaultLayout from "./layouts/Default";
import { StyledButton, StyledText } from "./styles/TestBlockStyles";
import ErrorBoundary from "./components/ErrorBoundary";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: start;
`;

const StyledGridItem = styled.div`
  border: 1px solid black;
  padding: 10px;
  font-size: 14px;
  text-align: center;
`;

function App() {
  const theme = useContext(ThemeContext);

  const [showClassComponent, setShowClassComponent] = useState(true);

  return (
    <DefaultLayout>
      <div className="App">
        <StyledGrid>
          <StyledGridItem>
            <span>
              Toggler:{" "}
              <StyledButton
                onClick={() => setShowClassComponent(!showClassComponent)}
              >
                Toggle component mount
              </StyledButton>
            </span>

            {showClassComponent && (
              <ErrorBoundary
                fallback={
                  <StyledText>Error fallback ui for class component</StyledText>
                }
              >
                <TestClassComponent
                  title={"class prop title"}
                  content={"class prop content"}
                />
              </ErrorBoundary>
            )}
          </StyledGridItem>
          <TestFunctionComponent
            title={"function prop title"}
            content={"function prop content"}
          />
        </StyledGrid>
      </div>
    </DefaultLayout>
  );
}

export default App;
