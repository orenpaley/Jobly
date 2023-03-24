import React from "react";
import { render } from "@testing-library/react";
import Signup from "./Signup";

//smoke test
test("Signup Smokeshot", () => {
  render(<Signup />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<Signup />);
  expect(asFragment()).toMatchSnapshot();
});
