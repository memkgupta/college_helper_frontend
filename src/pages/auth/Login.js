import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { Link, useNavigate } from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai'
import axios from 'axios';
import { BASE_URL_BACKEND } from '../../constants/globalConstants';
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, setStatus } from '../../slices/userSlice';
import { useEffect } from 'react';
function Login() {
  const {user,status} = useSelector(state=>state.user);
  const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const [form,setForm] = useState({email:'',password:''});
    const [show,setShow] = useState(false);
    const togglePassword = (e)=>{
      e.preventDefault();
      setShow(show?false:true);
    }
    const handleLogin = async(e)=>{
      e.preventDefault();
      e.stopPropagation();
      console.log(form);


      try {
        const req = await axios.post(`${BASE_URL_BACKEND}/login`,{email:form.email,password:form.password});
        const data = req.data;
        if(data.success){
          toast.success("User Logged In Successfully");
          dispatch(loadUser(data.user));
          dispatch(setStatus('Success'));
  setTimeout(()=>{navigate('/account',{replace:true})},2000)
        }
        else{toast.error(data.message)}
      } catch (error) {
        dispatch(setStatus('Error'))
        toast.error(error.message);
      }
  
    }
const handleChange = (e)=>{
  setForm({...form,[e.target.id]:e.target.value})
}
useEffect(()=>{
if(user._id){
  navigate('/account',{replace:true});
}
},[user])
  return (
    <>
      <Toaster position='top-center'></Toaster>
    <div className={`flex justify-center `}>
<div className={`${theme==='dark'?'bg-dark text-white':'bg-white'} mt-14 flex flex-col justify-center  sm:px-6 lg:px-8`}>
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className={`text-center text-3xl font-extrabold ${theme==='dark'?'text-white':'text-dark'}`}>
      Log in to your account
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="border-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleLogin} >
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 text-dark flex">
            <input onChange={handleChange} id="email" name="email" type="text" value={form.email} autocomplete="email" required
              className="appearance-none block w-full px-3 py-2 border border-dark rounded-md shadow-sm placeholder-dark focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
         
          </div>
        </div>

        <div>
          <label for="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 text-dark flex">
            <input value={form.password} onChange={handleChange} id="password" name="password" type={show?'text':'password'} autocomplete="current-password" required
              className="appearance-none block w-full px-3 py-2 border border-dark rounded-md shadow-sm placeholder-dark focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
               <div className="text-gray ml-2 mt-auto mb-auto">
              <i onMouseUp={togglePassword} onMouseDown={togglePassword}><AiFillEye></AiFillEye></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          

          <div className="text-sm">
            <Link to="/password/forgot" className="font-medium text-cyan hover:text-indigo-500">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <button type="submit" 
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
    </>
  
  )
}

export default Login