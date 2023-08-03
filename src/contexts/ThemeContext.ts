import { createContext } from "react";

export interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const toggleTheme = (val: string): string => {
  return val === 'light' ? 'dark' : 'light';
}

const initialTheme: ThemeContextProps = {
  theme: "light",
  toggleTheme: () => {} 
}


const ThemeContext = createContext<ThemeContextProps>(initialTheme);

export default ThemeContext;

