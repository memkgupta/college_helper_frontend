import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'

function Login() {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`flex justify-center `}>
<div className={`${theme==='dark'?'bg-dark text-white':'bg-white'} mt-14 flex flex-col justify-center  sm:px-6 lg:px-8`}>
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className={`text-center text-3xl font-extrabold ${theme==='dark'?'text-white':'text-dark'}`}>
      Log in to your account
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="border-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" >
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 text-dark">
            <input id="email" name="email" type="email" autocomplete="email" required
              className="appearance-none block w-full px-3 py-2 border border-dark rounded-md shadow-sm placeholder-dark focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 text-dark">
            <input id="password" name="password" type="password" autocomplete="current-password" required
              className="appearance-none block w-full px-3 py-2 border border-dark rounded-md shadow-sm placeholder-dark focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          

          <div className="text-sm">
            <a href="#" className="font-medium text-cyan hover:text-indigo-500">
              Forgot your password?
            </a>
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
  )
}

export default Login