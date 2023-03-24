import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

//smoke test
test("App Smokeshot", () => {
  render(<Home />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
