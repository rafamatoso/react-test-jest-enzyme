import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../../actions";

export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    // initialize state
    this.state = { currentGuess: "" };

    // bind this for submitGuessedWord
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();

    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline my-3">
        <input
          data-test="input-box"
          className="mr-sm-3"
          type="text"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary"
          type="submit"
          onClick={(e) => this.submitGuessedWord(e)}
        >
          Guess
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
