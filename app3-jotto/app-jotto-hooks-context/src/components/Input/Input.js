import React from "react";
import PropTypes from "prop-types";

export const Input = ({ secretWord }) => {
  return <div data-test="component-input" />;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
