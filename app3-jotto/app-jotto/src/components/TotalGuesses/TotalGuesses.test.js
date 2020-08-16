import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import TotalGuesses from "./";

const defaultProps = { guessCount: 0 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-total-guesses");
  expect(component.length).toBe(1);
});
