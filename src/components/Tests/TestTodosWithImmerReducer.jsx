import {
  StyledBlock,
  StyledButton,
  StyledHighlightedText,
  StyledInput,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "styles/TestBlockStyles";
import { useImmerReducer } from "use-immer";
import { createRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      state.push({ id: state.length + 1, text: action.text, done: false });
      break;
    case "toggle":
      const index = state.findIndex((todo) => todo.id === action.id);
      state[index].done = !state[index].done;
      break;
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
export default function TestTodosWithImmerReducer() {
  const [state, dispatch] = useImmerReducer(reducer, [], initializeTodos);

  const inputRef = createRef();

  return (
    <StyledWrapper>
      <StyledTitle>TestTodosWithImmerReducer</StyledTitle>

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
