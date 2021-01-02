import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

import hookactions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component.
 * @param {string} secretWord - desired secretWord state value for test
 * @returns {ReactWrapper}
 */
const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();

  hookactions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest
    .fn()
    .mockReturnValue([{ secretWord, language: "en" }, jest.fn()]);

  React.useReducer = mockUseReducer;

  // use mount(), because useEffect not called on `shallow` rendered currently
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");

  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // wrapper.update() doesn't trigger update
    // (issue forked from https://github.com/airbnb/enzyme/issues/2091)

    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secretWord is null", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(null);
  });

  test("does not renders app when secretWord is null", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");

    expect(appComponent.exists()).toBeFalsy();
  });

  test("renders spinner when secretWord is not null", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");

    expect(spinnerComponent.exists()).toBeTruthy();
  });
});
