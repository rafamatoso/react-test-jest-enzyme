import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { findByTestAttr, checkProps } from "../../../test/testUtils";
import { Input } from "./Input";
import LanguageContext from "../../context/languageContext";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ReactWrapper}
 */
const setup = ({ language, secretWord }) => {
  language = language || "en";
  secretWord = secretWord || "party";

  return mount(
    <LanguageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </LanguageContext.Provider>
  );
};

test("Input renders without error", () => {
  const wrapper = setup({});
  const inputComponent = findByTestAttr(wrapper, "component-input");

  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();

    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    wrapper = setup({});
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });

  describe("languagePicker", () => {
    test("correctly renders submit string in english", () => {
      const wrapper = setup({ language: "en" });
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.text()).toBe("Submit");
    });

    test("correctly renders submit string in emoji", () => {
      const wrapper = setup({ language: "emoji" });
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.text()).toBe("🚀");
    });
  });
});
