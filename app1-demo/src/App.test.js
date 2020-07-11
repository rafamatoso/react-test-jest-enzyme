import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// First argument: name os test suite; Second argument: anonymous function that executes the tests
test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();

  // debug returns a HTML-like of component DOM
  // console.log(wrapper.debug());
});
