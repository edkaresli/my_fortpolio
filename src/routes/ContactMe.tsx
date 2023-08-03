
import { useContext } from 'react';

import ThemeContext from '../contexts/ThemeContext';
import './ContactMe.css';


const ContactMe = () => {
  const context = useContext(ThemeContext);

  return (
    <div className={`contact-me contact-me-${context.theme}`}>      
      <form 
        action="" 
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-center">
          <label htmlFor="yourname">
            Your Name: 
          </label>
          <input 
            className="rounded-full w-full"
            type="text" 
            name="yourname" 
            id="yourname" 
          />
          <label htmlFor="message">
            Your message: 
          </label>
          <textarea 
            className="rounded-lg w-full"
            name="message" 
            id="message" 
            cols={50} 
            rows={10}>              
          </textarea>
          <button 
            className="btn bg-blue-600 text-white my-8 rounded-full w-1/2 shadow-lg " 
            type="submit" 
            value="Submit" 
            id="submit">Submit
          </button>
        </div>
      </form>            
    </div>
  )
};

export default ContactMe;