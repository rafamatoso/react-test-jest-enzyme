import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError: false,
    };
  }

  render() {
    return (
      <>
        <div data-test="component-app">
          <h1 data-test="counter-display">
            The counter is currently {this.state.counter}
          </h1>
          {this.state.showError && (
            <h2 data-test="error-display">The counter can't below 0</h2>
          )}
          <button
            data-test="increment-button"
            onClick={() =>
              this.setState({
                counter: this.state.counter + 1,
                showError: false,
              })
            }
          >
            Increment Counter
          </button>
          <button
            data-test="decrement-button"
            onClick={() =>
              this.setState({
                counter: this.state.counter > 0 ? this.state.counter - 1 : 0,
                showError: this.state.counter === 0 ? true : false,
              })
            }
          >
            Decrement Counter
          </button>
        </div>
      </>
    );
  }
}
