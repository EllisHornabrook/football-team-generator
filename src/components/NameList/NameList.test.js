import React from "react";
import { render } from "@testing-library/react";
import NameList from "./NameList";

describe("NameList tests", () => {
  it("should render", () => {
    expect(render(<NameList />)).toBeTruthy();
  });
});
