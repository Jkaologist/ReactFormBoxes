import React from "react";
import { render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders", function () {
  render(<BoxList />);
});
// snapshot test
it("matches the snapshot", function () {
  const { container } = render(<BoxList />);
  expect(container).toMatchSnapshot();
});

describe("add", function () {
  it("adds a new box", function () {
    const {container} = render(<BoxList />);
    const addBoxBtn = container.querySelector(".addBox");
    fireEvent.click(addBoxBtn);
    let box = container.querySelector(".boxDiv");
    expect(box).toBeInTheDocument();
  })
})

it("can add a new item", function () {
  const { getByLabelText, queryByText, container} = render(<BoxList/>);

  // no items yet
  expect(queryByText("height: 100")).not.toBeInTheDocument();

  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");
  const bgColorInput = getByLabelText("Background Color");
  const addBoxBtn = container.querySelector(".addBox");

  // fill out the form
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(bgColorInput, { target: { value: "green" } });
  fireEvent.click(addBoxBtn);

  // item exists!
  let box = container.querySelector(".boxDiv");
  expect(box).toBeInTheDocument();

});

it("can remove a box", function () {

  const {container} = render(<BoxList/>);
  const addBoxBtn = container.querySelector(".addBox");
  fireEvent.click(addBoxBtn);
  let box = container.querySelector(".boxDiv");
  expect(box).toBeInTheDocument();
  const removeBoxBtn = container.querySelector(".removeButton");
  fireEvent.click(removeBoxBtn);
  expect(box).not.toBeInTheDocument();

});
