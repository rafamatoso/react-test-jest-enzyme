import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import ServerError from "./";

test("renders without error", () => {
  const wrapper = shallow(<ServerError />);
  const component = findByTestAttr(wrapper, "component-server-error");

  expect(component.length).toBe(1);
});

test("renders non-empty text", () => {
  const wrapper = shallow(<ServerError />);
  const component = findByTestAttr(wrapper, "component-server-error");

  expect(component.text().length).not.toBe(0);
});
