import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from '../contexts/ThemeContext';

import homeIcon from '../assets/home_house_icon.svg';
import sunIcon from '../assets/sun_icon.svg';
import moonIcon from '../assets/moon_stars_fill_icon.svg';

const NavBar = () => {
  const context = useContext(ThemeContext);
  const [themeIcon, setThemeIcon] = useState(context.theme === 'light' ? sunIcon : moonIcon);
  
  const handleClick = () => {
    setThemeIcon(context.theme === 'light' ? moonIcon : sunIcon);
    context.theme = context.toggleTheme(context.theme);
    console.log(context.theme);
  }

  // useEffect(() => {
  //   setThemeIcon(context.theme === 'light' ? moonIcon : sunIcon);  
  //   console.log(context.theme);  
  // }, [context.theme])
  
  return (    
    <div className='flex flex-row items-center bg-blue-800'>
      <div className='flex flex-row justify-evenly basis-11/12 items-center bg-blue-800 text-white h-20'>      
        <div className='hover:bg-blue-600 '><Link to="/"><img src={homeIcon} alt="home" className='w-8 h-8' /></Link></div>
        <Link className='hover:text-blue-400 hover:underline' to="/projects">Projects</Link>
        <Link className='hover:text-blue-400 hover:underline' to="/videos">Videos</Link>
        <Link className='hover:text-blue-400 hover:underline' to="/contact-me">Contact Me</Link>                  
      </div>
      <div className='basis-1/12'>
        <img 
          src={ themeIcon } 
          onClick={() => handleClick()} 
          alt="sun" 
          className='w-8 h-8' 
        />
      </div>
    </div>        
  );
}

export default NavBar;