import React from "react";
import PropTypes from "prop-types";

/**
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered component.
 */
const TotalGuesses = (props) => {
  return (
    <div data-test="component-total-guesses">
      <h4>Total Guesses: {props.guessesCount}</h4>
    </div>
  );
};

TotalGuesses.propTypes = {
  guessesCount: PropTypes.number,
};

export default TotalGuesses;
