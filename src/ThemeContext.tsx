import React, { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./themes";
import { ThemeProvider } from "styled-components";

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

const ThemeProviderDemo = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export { ThemeProviderDemo, ThemeContext };
