import React from "react";
import { render } from "@testing-library/react";
import Teams from "./Teams";

describe("Teams tests", () => {
  it("should render", () => {
    expect(render(<Teams />)).toBeTruthy();
  });
});
