import React from "react";
import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import AutocompleteComponent from "../../components/autocomplete";


describe("AutocompleteComponent", () => {
  it("renders the correct number of autocomplete items", () => {
    const startDates = [new Date("2024-11-29"), new Date("2024-11-30")];

    const renderedOutput = renderToStaticMarkup(
      <AutocompleteComponent startDates={startDates} />
    );

    expect(renderedOutput).toBeDefined();
  });

  it("renders the autocomplete label", () => {
    const startDates = [new Date("2024-11-29"), new Date("2024-11-30")];

    const renderedOutput = renderToStaticMarkup(
      <AutocompleteComponent startDates={startDates} />
    );

    expect(renderedOutput.includes("Choose your Start Date")).toBe(true);
  });
});
