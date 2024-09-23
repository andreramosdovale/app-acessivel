"use client";

import { ThemeContextProvider } from "@/context/ThemeContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
