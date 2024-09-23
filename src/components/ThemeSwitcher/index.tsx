"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Header } from "./style";

const ThemeSwitcher = () => {
  const { toggleColorTheme, toggleTextSizeTheme } = useTheme();

  return (
    <>
      <Header>
        <button onClick={() => toggleColorTheme("light")}>Tema Claro</button>
        <button onClick={() => toggleColorTheme("dark")}>Tema Escuro</button>
        <button onClick={() => toggleColorTheme("highContrast")}>
          Alto Contraste
        </button>
        <button onClick={() => toggleColorTheme("inverted")}>
          Inverter Cores
        </button>
        <button onClick={() => toggleTextSizeTheme("normal")}>
          Tamanho Normal
        </button>
        <button onClick={() => toggleTextSizeTheme("large")}>
          Tamanho Grande
        </button>
        <button onClick={() => toggleTextSizeTheme("extraLarge")}>
          Tamanho Extra Grande
        </button>
      </Header>
    </>
  );
};

export default ThemeSwitcher;
