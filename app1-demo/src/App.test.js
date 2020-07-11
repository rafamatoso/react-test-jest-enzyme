import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// First argument: name os test suite; Second argument: anonymous function that executes the tests
test("renders learn react link", () => {});
