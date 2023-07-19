import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AiFillEye } from 'react-icons/ai';
import { BASE_URL_BACKEND } from '../../constants/globalConstants';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [form,setForm] = useState({name:'',uname:'',email:'',password:''});
  const [show,setShow] = useState(false);
  const navigate= useNavigate();
  const togglePassword = (e)=>{
    e.preventDefault();
    setShow(show?false:true);
  }
  const handleChange = (e)=>{
    setForm(form=>({...form,[e.target.id]:e.target.value}));
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    
try {
  const signupReq = await axios.post(`${BASE_URL_BACKEND}/register`,form);
const data = signupReq.data;
if(data.success){
  toast.success('User Registered SuccessFully,An email has been sent Please Verify Your Account');
  setTimeout(()=>{
    navigate(`/account/verify?token=${data.credentials.token}`);
},5000)
}
else{
  toast.error(data.message);
}
} catch (error) {
  toast.error("Oops Some Error Occured "+error.message);
}
  }
  return (
    <>
    <Toaster position='top-center'></Toaster>
    {/* Main */}
    <div className='flex justify-center '>
        <div className="bg-gray-100 mt-14 text-dark4 flex flex-col justify-center  sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className=" text-center text-3xl font-extrabold text-gray-900">
      Sign up for an account
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="border-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label for="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="mt-1 text-dark">
            <input value={form.name} onChange={handleChange} id="name" name="name" type="text" autocomplete="name" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 text-dark ">
            <input onChange={handleChange} value={form.email} id="email" name="email" type="email" autocomplete="email" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <div className="mt-1 text-dark ">
            <input onChange={handleChange} value={form.uname} id="uname" name="uname" type="text" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label for="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 text-dark flex">
            <input value={form.password} onChange={handleChange} id="password" name="password" type={show?'text':'password'} autocomplete="current-password" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
                <div className="text-gray ml-2 mt-auto mb-auto">
              <i onMouseUp={togglePassword} onMouseDown={togglePassword}><AiFillEye></AiFillEye></i>
            </div>
          </div>
        </div>

        <div>
          <button type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* <!-- Heroicon name: solid/lock-closed --> */}
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 2C5.03 2 1 5.03 1 9v7a1 1 0 001 1h16a1 1 0 001-1v-7c0-3.97-4.03-7-9-7zm0 2a5 5 0 100 10A5 5 0 0010 4zm1 10a3 3 0 11-2-2.83V13a1 1 0 102 0v-1.83c.59-.34 1-.98 1-1.7 0-1.11-.9-2-2-2s-2 .89-2 2H7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .72.41 1.36 1 1.7V13h-.17A3 3 0 0111 14z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign up
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

export default SignUp