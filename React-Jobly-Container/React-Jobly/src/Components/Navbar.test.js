import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

//smoke test
test("App Smokeshot", () => {
  render(<NavBar />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});
