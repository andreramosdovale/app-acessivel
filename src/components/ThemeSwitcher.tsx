"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleColorTheme, toggleTextSizeTheme, colorTheme, textSizeTheme } =
    useTheme();

  return (
    <div>
      <h3>Escolha o Tema de Cores:</h3>
      <button onClick={() => toggleColorTheme("light")}>Tema Claro</button>
      <button onClick={() => toggleColorTheme("dark")}>Tema Escuro</button>
      <button onClick={() => toggleColorTheme("highContrast")}>
        Alto Contraste
      </button>
      <button onClick={() => toggleColorTheme("inverted")}>
        Inverter Cores
      </button>

      <h3>Escolha o Tamanho do Texto:</h3>
      <button onClick={() => toggleTextSizeTheme("normal")}>
        Tamanho Normal
      </button>
      <button onClick={() => toggleTextSizeTheme("large")}>
        Tamanho Grande
      </button>
      <button onClick={() => toggleTextSizeTheme("extraLarge")}>
        Tamanho Extra Grande
      </button>
    </div>
  );
};

export default ThemeSwitcher;
