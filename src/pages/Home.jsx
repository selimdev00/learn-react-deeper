import TestClassComponent from "components/Tests/TestClassComponent";
import { useState } from "react";
import TestFunctionComponent from "components/Tests/TestFunctionComponent";

import styled from "styled-components";
import { StyledButton, StyledText } from "styles/TestBlockStyles";
import ErrorBoundary from "components/Errors/ErrorBoundary";
import TestUseReducer from "components/Tests/TestUseReducer";
import TestCustomHook from "components/Tests/TestCustomHook";
import TestTodosWithReducer from "components/Tests/TestTodosWithReducer";
import TestTodosWithImmerReducer from "components/Tests/TestTodosWithImmerReducer";
import TestWithUseRef from "components/Tests/TestWithUseRef";
import TestThrottling from "components/Tests/TestThrottling";
import TestDebounce from "components/Tests/TestDebounce";
import TestStopPropagation from "components/Tests/TestStopPropagation";
import TestHOC from "components/Tests/TestHOC";

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
  background: white;
`;

function HomePage() {
  const [showClassComponent, setShowClassComponent] = useState(false);
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);

  return (
    <div className="App">
      <StyledGrid>
        <StyledGridItem>
          <TestCustomHook />
        </StyledGridItem>

        <StyledGridItem>
          <TestHOC />
        </StyledGridItem>

        <StyledGridItem>
          <TestStopPropagation />
        </StyledGridItem>

        <StyledGridItem>
          <TestDebounce />
        </StyledGridItem>

        <StyledGridItem>
          <TestThrottling />
        </StyledGridItem>

        <StyledGridItem>
          <TestWithUseRef />
        </StyledGridItem>

        <StyledGridItem>
          <TestTodosWithImmerReducer />
        </StyledGridItem>

        <StyledGridItem>
          <TestTodosWithReducer />
        </StyledGridItem>

        <StyledGridItem>
          <TestUseReducer />
        </StyledGridItem>

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

        <StyledGridItem>
          <span>
            Toggler:{" "}
            <StyledButton
              onClick={() => setShowFunctionComponent(!showFunctionComponent)}
            >
              Toggle component mount
            </StyledButton>
          </span>

          {showFunctionComponent && (
            <TestFunctionComponent
              title={"function prop title"}
              content={"function prop content"}
            />
          )}
        </StyledGridItem>
      </StyledGrid>
    </div>
  );
}

export default HomePage;
