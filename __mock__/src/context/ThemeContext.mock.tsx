import { useTheme } from "@/context/ThemeContext";

export default function MockComponent() {
  const { colorTheme, textSizeTheme, toggleColorTheme, toggleTextSizeTheme } =
    useTheme();

  return (
    <div>
      <p data-testid="color-theme">Color Theme: {colorTheme}</p>
      <p data-testid="text-size-theme">Text Size Theme: {textSizeTheme}</p>
      <button onClick={() => toggleColorTheme("dark")}>Set Dark Theme</button>
      <button onClick={() => toggleTextSizeTheme("large")}>
        Set Large Text
      </button>
    </div>
  );
}
