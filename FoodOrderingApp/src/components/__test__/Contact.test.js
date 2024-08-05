import { render, screen, decribe } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  test("should load contact us component", () => {
    render(<ContactUs />); //rendered to the js dom

    const heading = screen.getByRole("heading");
    const button = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should load contact us submit button", () => {
    render(<ContactUs />); //rendered to the js dom

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
