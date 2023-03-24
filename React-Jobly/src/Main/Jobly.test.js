import React from "react";
import { render } from "@testing-library/react";
import Jobly from "./Jobly";

test("App Smokeshot", () => {
  render(<Jobly />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Jobly />);
  expect(asFragment()).toMatchSnapshot();
});
