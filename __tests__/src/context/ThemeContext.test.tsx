import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeContextProvider, useTheme } from "@/context/ThemeContext";
import MockComponent from "@/../__mock__/src/context/ThemeContext.mock";
import "@testing-library/jest-dom";

describe("ThemeContextProvider", () => {
  it("should provide default theme values", () => {
    render(
      <ThemeContextProvider>
        <MockComponent />
      </ThemeContextProvider>
    );

    expect(screen.getByTestId("color-theme")).toHaveTextContent(
      "Color Theme: light"
    );
    expect(screen.getByTestId("text-size-theme")).toHaveTextContent(
      "Text Size Theme: normal"
    );
  });

  it("should toggle color theme", async () => {
    render(
      <ThemeContextProvider>
        <MockComponent />
      </ThemeContextProvider>
    );

    const colorThemeButton = screen.getByText("Set Dark Theme");
    fireEvent.click(colorThemeButton);

    await waitFor(() => {
      expect(screen.getByTestId("color-theme")).toHaveTextContent(
        "Color Theme: dark"
      );
    });
  });

  it("should toggle text size theme", async () => {
    render(
      <ThemeContextProvider>
        <MockComponent />
      </ThemeContextProvider>
    );

    const textSizeButton = screen.getByText("Set Large Text");
    fireEvent.click(textSizeButton);

    await waitFor(() => {
      expect(screen.getByTestId("text-size-theme")).toHaveTextContent(
        "Text Size Theme: large"
      );
    });
  });

  it("should throw an error if useTheme is used outside of ThemeContextProvider", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const TestComponent = () => {
      useTheme();
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow(
      "useTheme must be used within a ThemeProvider"
    );

    consoleError.mockRestore();
  });
});
