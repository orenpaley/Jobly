import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

//smoke test
test("App Smokeshot", () => {
  render(<Login />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<Login />);
  expect(asFragment()).toMatchSnapshot();
});
