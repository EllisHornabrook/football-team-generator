import React from "react";
import { render } from "@testing-library/react";
import GenerateTeams from "./GenerateTeams";

describe("GenerateTeams tests", () => {
  it("should render", () => {
    expect(render(<GenerateTeams />)).toBeTruthy();
  });
});
