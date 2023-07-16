import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import Login from './Login';
import SignUp from './SignUp';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function Auth() {
    const {theme} = useContext(ThemeContext);
    const [selected,setSelected] = useState('login')
  return (
   <div style={{minHeight:'90vh'}} className={`min-height-screen ${theme==='dark'?'bg-dark text-white':"bg-white"}`}>
   <div className={` flex justify-center `} >
    <div >
        <button id='login' onClick={(e)=>{setSelected(e.target.id)}}   className={`cursor-pointer  mx-5 ${selected==="login"&&'underline underline-offset-8'}  decoration-4 ${theme==='dark'?'decoration-cyan':'decoration-dark'} `} >Login</button>
    </div>
    <div >
        <button onClick={(e)=>{setSelected(e.target.id);}} id="signup" className={`cursor-pointer mx-5 ${selected==="signup"&&'underline underline-offset-8'} decoration-4 ${theme==='dark'?'decoration-cyan':'decoration-dark'}`}>Signup</button>
    </div>
   </div>

   <LazyLoadComponent
   >
   {selected==='login'?<Login></Login>:<SignUp></SignUp>}
   </LazyLoadComponent>
   </div>
  )
}

export default Auth