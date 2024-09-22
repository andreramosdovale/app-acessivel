"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { colorThemes, textSizeThemes } from "../styles/themes";

interface ThemeContextData {
  toggleColorTheme: (
    theme: "light" | "dark" | "highContrast" | "inverted"
  ) => void;
  toggleTextSizeTheme: (size: "normal" | "large" | "extraLarge") => void;
  colorTheme: "light" | "dark" | "highContrast" | "inverted";
  textSizeTheme: "normal" | "large" | "extraLarge";
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<
    "light" | "dark" | "highContrast" | "inverted"
  >("light");
  const [textSizeTheme, setTextSizeTheme] = useState<
    "normal" | "large" | "extraLarge"
  >("normal");

  const toggleColorTheme = (
    selectedTheme: "light" | "dark" | "highContrast" | "inverted"
  ) => {
    setColorTheme(selectedTheme);
  };

  const toggleTextSizeTheme = (
    selectedSize: "normal" | "large" | "extraLarge"
  ) => {
    setTextSizeTheme(selectedSize);
  };

  const currentTheme = {
    ...colorThemes[colorTheme],
    ...textSizeThemes[textSizeTheme],
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleColorTheme,
        toggleTextSizeTheme,
        colorTheme,
        textSizeTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
