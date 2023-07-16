import React from 'react'

function SignUp() {
  return (
    <div className='flex justify-center '>
        <div className="bg-gray-100 mt-14 text-dark4 flex flex-col justify-center  sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className=" text-center text-3xl font-extrabold text-gray-900">
      Sign up for an account
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="border-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" >
        <div>
          <label for="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="mt-1 text-dark">
            <input id="name" name="name" type="text" autocomplete="name" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 text-dark ">
            <input id="email" name="email" type="email" autocomplete="email" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 text-dark">
            <input id="password" name="password" type="password" autocomplete="current-password" required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
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
  )
}

export default SignUp