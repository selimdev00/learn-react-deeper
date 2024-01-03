import { Component } from "react";

import ThemeContext from "../contexts/Theme";

class TestClassComponent extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = "button-" + theme;

    return (
      <div>
        <h1>Test</h1>

        <p>So this is class component</p>

        <p>Theme context: {theme}</p>

        <button className={className}>Click</button>
      </div>
    );
  }
}

export default TestClassComponent;
