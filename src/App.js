import TestClassComponent from "./components/TestClassComponent";
import { useContext } from "react";
import ThemeContext from "./contexts/Theme";
import TestFunctionComponent from "./components/TestFunctionComponent";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <TestClassComponent />

      <TestFunctionComponent />
    </div>
  );
}

export default App;
