import {
  StyledBlock,
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "styles/TestBlockStyles";

import { useReducer, createRef } from "react";

import userReducer from "reducers/userReducer";

export default function TestUseReducer() {
  const [state, dispatch] = useReducer(
    userReducer,
    { firstName: "John", lastName: "Doe", age: 19 },
    (args) => {
      return args;
    },
  );

  const firstNameInput = createRef();
  const lastNameInput = createRef();

  return (
    <StyledWrapper>
      <StyledTitle>Usage of </StyledTitle>
      <StyledHighlightedText>
        <pre>useReducer</pre>
      </StyledHighlightedText>

      <StyledText>
        First name: {state.firstName}{" "}
        <input
          ref={firstNameInput}
          type="text"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: "changeFirstName",
              firstName: firstNameInput.current.value,
            })
          }
        />
      </StyledText>

      <StyledText>
        Last name: {state.lastName}{" "}
        <input
          ref={lastNameInput}
          type="text"
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: "changeLastName",
              lastName: lastNameInput.current.value,
            })
          }
        />
      </StyledText>

      <StyledText>Age: {state.age}</StyledText>

      <StyledBlock>
        <StyledButton onClick={() => dispatch({ type: "increment" })}>
          Increment
        </StyledButton>

        <StyledButton onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </StyledButton>
      </StyledBlock>
    </StyledWrapper>
  );
}
