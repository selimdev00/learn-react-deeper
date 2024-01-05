export default function userReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, age: state.age + 1 };
    case "decrement":
      return { ...state, age: state.age - 1 };
    case "changeFirstName":
      return { ...state, firstName: action.firstName };
    case "changeLastName":
      return { ...state, lastName: action.lastName };
    default:
      throw new Error();
  }
}
