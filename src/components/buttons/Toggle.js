import React, { useContext } from 'react'
import './toggle.css'
import { ThemeContext } from '../../contexts/themeContext'
function Toggle() {
    const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div className='ml-5'>
    <label class="switch">
    <input type="checkbox" onClick={(e)=>{setTheme(theme==='dark'?'light':'dark')}}/>
    <span class="slider round"></span>
  </label>
    </div>

  )
}

export default Toggle