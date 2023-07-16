import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext';
import { BG_TEXT } from '../../constants/themeConstant';
import { Link } from 'react-router-dom';
import Toggle from '../buttons/Toggle';

function Navbar() {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <header className={`text-gray-600 bg-white ${theme==='dark'?'dark:bg-dark':''}  body-font`}>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
        <img src="https://o.remove.bg/downloads/aa151bbb-11fc-42ba-9a3f-1b93e8995864/1c54f7b06d7723c21afc5035bf88a5ef-removebg-preview.png" alt="" class="w-10 h-10 text-white p-2  rounded-full" viewBox="0 0 24 24"/>
        <span className={`ml-3 text-xl ${theme==='dark'?'dark:text-white':''}`}>College Guide</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to={'/'} className={`mr-5  ${theme==='dark'?'dark:text-white':''} hover:${theme==='dark'?'bg-blue':'text-gray'}`}>Home</Link>
        <Link to={'/pyp'} className={`mr-5  ${theme==='dark'?'dark:text-white':''} hover:${theme==='dark'?'bg-blue':'text-gray'}`}>PYP&apos;s</Link>
        <Link to={'/courses'} className={`mr-5  ${theme==='dark'?'dark:text-white':''} hover:${theme==='dark'?'bg-blue':'text-gray'}`}>Courses</Link>
        <Link to={'#'} className={`mr-5  ${theme==='dark'?'dark:text-white':''} hover:${theme==='dark'?'bg-blue':'text-gray'}`}>Discuss</Link>
      </nav>
      <Link  to={"/Auth"} class="inline-flex items-center text-white bg-gray border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>

 <Toggle></Toggle>

   
    


    </div>
  </header>
  )
}

export default Navbar