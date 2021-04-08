import React from "react";
import { render} from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// smoke test
it("renders", function () {
  render(<NewBoxForm />);
});
// snapshot test
it("matches the snapshot", function () {
  const { container } = render(<NewBoxForm />);
  expect(container).toMatchSnapshot();
});



