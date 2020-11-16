import React from "react";
import { render } from "@testing-library/react";
import Player from "./Player";

describe("Player tests", () => {
  it("should render", () => {
    expect(render(<Player />)).toBeTruthy();
  });
});
