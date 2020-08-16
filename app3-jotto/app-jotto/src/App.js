import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";
import Input from "./components/Input";
import TotalGuesses from "./components/TotalGuesses";
import { getSecretWord } from "./actions";

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // Get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>
          {"<"} Jotto {">"}
        </h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        {this.props.guessedWords.length > 0 && (
          <TotalGuesses guessesCount={this.props.guessedWords.length} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
