import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";

//smoke test
test("App Smokeshot", () => {
  render(<Routes />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<Routes />);
  expect(asFragment()).toMatchSnapshot();
});
