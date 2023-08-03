import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Videos from './Videos';
import videos from '../data/videos';
import ContactMe from './ContactMe';
import Footer from '../components/Footer';

const MainContent: React.FC = () => {
  return (
    <div 
      className='flex flex-col items-center justify-center w-full h-screen' 
      id='main-content'
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/videos' element={<Videos videos={videos}/>} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default MainContent;