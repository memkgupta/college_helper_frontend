import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import { ActiveChatContext } from '../../contexts/activeChatContext';

function RoomNav() {
    const [isOpen, setIsOpen] = useState(false);
    const {activeChat,setActiveChat} = useContext(ActiveChatContext)
const {theme} = useContext(ThemeContext);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
  <div style={{minWidth:'100%',zIndex:'2'}} className={`container `}>
    <div className={`w-48 grid rounded-md ${theme==='dark'?'bg-dark text-white':'bg-white text-dark'} opacity-75`}>
      {/* Sidebar button */}
      <button
        className="place-self-start text-gray-500 focus:outline-none focus:text-gray-900"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <nav
        className={`lg:w-48 bg-gray-100 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {/* chat rooms */}
        <ul className="py-4 grid grid-cols-1 place-items-center">
          <li className='my-2 w-48  rounded-md text-center bg-gray opacity-25 hover:opacity-100'>
            <button
              onClick={(e)=>setActiveChat(e.target.id)}
              className="block text-gray-700 px-4 py-2 hover:bg-gray-200"
              id='chat-room-1'
           >
              Home
            </button>
          </li>
          <li className='my-2 w-48 rounded-md text-center bg-gray opacity-25 hover:opacity-100'>
            <button
            id='chat-room-2'
              onClick={(e)=>setActiveChat(e.target.id)}
              className="block text-gray-700 px-4 py-2 hover:bg-gray-200"
            >
              About
            </button>
          </li>
          <li className='my-2 w-48 rounded-md text-center bg-gray opacity-25 hover:opacity-100'>
            <button id='chat-room-3'
              onClick={(e)=>setActiveChat(e.target.id)}
              className="block text-gray-700 px-4 py-2 hover:bg-gray-200"
            >
              Services
            </button>
          </li>
          <li className='my-2 w-48 rounded-md text-center bg-gray opacity-25 hover:opacity-100'>
            <button id='chat-room-4'
              onClick={(e)=>setActiveChat(e.target.id)}
              className="block text-gray-700 px-4 py-2 hover:bg-gray-200"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>

  </div>
  )
}

export default RoomNav