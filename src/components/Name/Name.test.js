import React from "react";
import { render } from "@testing-library/react";
import Name from "./Name";

describe("Name tests", () => {
  it("should render", () => {
    expect(render(<Name />)).toBeTruthy();
  });
});
