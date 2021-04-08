import React from "react";
import { render} from "@testing-library/react";
import Box from "./Box";

// smoke test
it("renders", function () {
  render(<Box />);
});
// snapshot test
it("matches the snapshot", function () {
  const { container } = render(<Box />);
  expect(container).toMatchSnapshot();
});
