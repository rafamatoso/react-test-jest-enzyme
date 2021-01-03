import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import LanguageContext from "../../context/languageContext";
import successContext from "../../context/successContext";
import Congrats from "./Congrats";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = ({ success, language }) => {
  language = language || "en";
  success = success || false;

  return mount(
    <LanguageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </LanguageContext.Provider>
  );
};

describe("languagePicker", () => {
  test("correctly renders congrats string in english", () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
  });

  test("correctly renders congrats strings in emoji", () => {
    const wrapper = setup({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe("🎯🎉");
  });
});

test("renders without error", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe(0);
});
