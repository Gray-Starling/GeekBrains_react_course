import React from "react";
import { render, screen, describe, test, expect } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TestFunc } from "./TestFunc";

describe("testing component", () => {
  test("it renders", () => {
    render(<TestFunc />);
  });
  test("Есть ли в документе строчка", () => {
    render(<TestFunc />);
    expect(screen.getByText("Ваше число:")).toBeInTheDocument();
  });
});
