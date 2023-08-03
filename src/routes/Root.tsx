
import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import  NavBar from "./NavBar";
import ThemeContext from '../contexts/ThemeContext.ts';

import "../Root.css";


const Root = () => {
  const context = useContext(ThemeContext);
  const [theme, setTheme] = useState<string>(context.theme);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={'container-' + theme}>        
        <NavBar />
        <div id="content" className="h-full" data-theme={theme}>
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  )
};

export default Root;
