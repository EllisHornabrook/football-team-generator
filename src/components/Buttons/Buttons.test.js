import React from "react";
import { render } from "@testing-library/react";
import Buttons from "./Buttons";

describe("Buttons tests", () => {
  it("should render", () => {
    expect(render(<Buttons />)).toBeTruthy();
  });
});
