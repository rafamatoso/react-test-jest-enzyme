import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<App></App>);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(2);
});

test("renders increment button", () => {});

test("renders counter display", () => {});

test("should counter starts at 0", () => {});

test("should button click increments counter display", () => {});
