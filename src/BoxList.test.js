import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// function add(height=2px, width=2px, container, color="black") {

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
    // add( container );
    let box = container.querySelector("box")
    expect(box).toBeInTheDocument();
  })
})

// it("can add a new item", function () {
//   const { getByLabelText, queryByText } = render(<ShoppingList />);

//   // no items yet
//   expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

//   const nameInput = getByLabelText("Name:");
//   const qtyInput = getByLabelText("Qty:");
//   const submitBtn = queryByText("Add a new item!");

//   // fill out the form
//   fireEvent.change(nameInput, { target: { value: "ice cream" } });
//   fireEvent.change(qtyInput, { target: { value: 100 } });
//   fireEvent.click(submitBtn);

//   // item exists!
//   expect(queryByText("ice cream: 100")).toBeInTheDocument();
// });