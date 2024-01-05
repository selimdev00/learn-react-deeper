import { createRef, useReducer } from "react";
import {
  StyledBlock,
  StyledButton,
  StyledInput,
  StyledTitle,
  StyledWrapper,
  StyledText,
  StyledHighlightedText,
} from "styles/TestBlockStyles";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text,
          id: state.length + 1,
          done: false,
        },
      ];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : { ...todo },
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action");
  }
}

function initializeTodos() {
  return [
    {
      text: "buy milk",
      id: 1,
      done: false,
    },
  ];
}

export default function TestTodosWithReducer() {
  const [state, dispatch] = useReducer(reducer, [], initializeTodos);

  const inputRef = createRef();

  return (
    <StyledWrapper>
      <StyledTitle>TestTodosWithReducer</StyledTitle>

      <StyledBlock>
        <StyledInput type="text" placeholder={"buy milk"} ref={inputRef} />

        <StyledButton
          onClick={() =>
            dispatch({ type: "add", text: inputRef.current.value })
          }
        >
          Add
        </StyledButton>
      </StyledBlock>

      <StyledBlock
        as={"ul"}
        style={{ flexDirection: "column", alignItems: "flex-start" }}
      >
        {state.map((todo, index) => (
          <StyledBlock key={`todo-${index}`}>
            <input
              type={"checkbox"}
              checked={todo.done}
              onChange={() => dispatch({ type: "toggle", id: todo.id })}
            />

            <StyledHighlightedText>{index + 1}. </StyledHighlightedText>

            <StyledText>{todo.text}</StyledText>

            <StyledButton
              onClick={() => dispatch({ type: "remove", id: todo.id })}
            >
              Remove
            </StyledButton>
          </StyledBlock>
        ))}
      </StyledBlock>
    </StyledWrapper>
  );
}
