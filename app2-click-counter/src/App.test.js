import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App Component.
 * @function
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

// Click Counter Challenges
test("renders decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

// Click Counter Challenges
test("should showError state starts falsy ", () => {
  const wrapper = setup();
  const initialShowErrorState = wrapper.state("showError");
  expect(initialShowErrorState).toBeFalsy();
});

// Click Counter Challenges
test("no renders error display initially", () => {
  const wrapper = setup();
  const errorDisplay = findByTestAttr(wrapper, "error-display");
  expect(errorDisplay.length).toBe(0);
});

// Click Counter Challenges
test("renders display error if counter is at 0 and decrement button has been clicked", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");

  const errorDisplay = findByTestAttr(wrapper, "error-display");
  expect(errorDisplay.length).toBe(1);
});

test("should counter state starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("should increment button increments counter display", () => {
  const counter = 8;
  const wrapper = setup(null, { counter });

  // find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

// Click Counter Challenges
test("should decrement button decrements counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");

  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

// Click Counter Challenges
test("should counter don't go below zero when decrement button is clicked", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");

  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(0);
});
