import { Component, createRef } from "react";

import ThemeContext from "../contexts/Theme";

import {
  StyledBlock,
  StyledButton,
  StyledHighlightedText,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "../styles/TestBlockStyles";

import PropTypes from "prop-types";

class TestClassComponent extends Component {
  static contextType = ThemeContext;

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  };

  static defaultProps = {
    title: "Default title",
    content: "Default content",
  };

  constructor(props) {
    super(props);

    this.roomRef = createRef();
  }

  state = {
    count: 0,
    name: "Class Component",
    serverUrl: "http://localhost:3000",
    roomId: 1,
  };

  setupConnection = () => {
    console.log(
      `✅[${this.state.name}]: Connected to server: ${this.state.serverUrl}, room: ${this.state.roomId}`,
    );
  };

  cancelConnection = ({ roomId, serverUrl }) => {
    console.log(
      `❌[${this.state.name}]: Disconnected from server: ${serverUrl}, room: ${roomId}`,
    );
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentWillUnmount() {
    this.cancelConnection(this.state);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.roomRef.current.value;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count !== this.state.count) {
      console.log(
        `🔴[${this.state.name}]: Count changed from ${prevState.count} to ${this.state.count}`,
      );
    }

    if (
      prevState.roomId !== this.state.roomId ||
      prevState.serverUrl !== this.state.serverUrl
    ) {
      this.cancelConnection(prevState);
      this.setupConnection();
    }

    console.log(`🫰 [${this.state.name}]: Snapshot ${snapshot}`);
    console.log(
      `🫰 [${this.state.name}]: Snapshot (native ???) ${this.roomRef.current.value}`,
    );
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  removeCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  changeRoomId = (event) => {
    this.setState(
      {
        roomId: event.target.value,
      },
      () => {
        console.log(`✅ Room changed to ${this.state.roomId}`);
      },
    );
  };

  applyServer = () => {
    const serverUrl = document.getElementById("server").value;

    this.setState({
      serverUrl,
    });
  };

  render() {
    throw "something";

    const theme = this.context;

    return (
      <StyledWrapper>
        <StyledBlock>
          <StyledText>Server:</StyledText>

          <input id="server" type="text" />

          <StyledButton onClick={this.applyServer}>Apply server</StyledButton>
        </StyledBlock>

        <StyledBlock>
          <StyledText>Room:</StyledText>
          <select
            ref={this.roomRef}
            value={this.state.roomId}
            onChange={this.changeRoomId}
          >
            <option value="1">General</option>
            <option value="2">Develops</option>
            <option value="3">Designers</option>
          </select>
        </StyledBlock>

        <StyledTitle>Test (class component)</StyledTitle>

        <StyledText>
          So this is <StyledHighlightedText>class</StyledHighlightedText>{" "}
          component
        </StyledText>

        <StyledText>
          Theme context: <StyledHighlightedText>{theme}</StyledHighlightedText>
        </StyledText>

        <StyledText>
          Styled with:{" "}
          <StyledHighlightedText>styled-components</StyledHighlightedText>{" "}
          exported with a{" "}
          <StyledHighlightedText>single exported file</StyledHighlightedText>
        </StyledText>

        <StyledText>
          And that's <StyledHighlightedText>cool</StyledHighlightedText>
        </StyledText>

        <StyledText>
          Props:{" "}
          {Object.keys(this.props).map((key) => (
            <StyledHighlightedText key={key}>
              {this.props[key]} |{" "}
            </StyledHighlightedText>
          ))}
        </StyledText>

        <StyledBlock>
          <StyledText>State usage (count):</StyledText>
          <StyledHighlightedText>{this.state.count}</StyledHighlightedText>
          <StyledButton onClick={this.addCount}>+</StyledButton>
          <StyledButton onClick={this.removeCount}>-</StyledButton>
        </StyledBlock>
      </StyledWrapper>
    );
  }
}

export default TestClassComponent;
