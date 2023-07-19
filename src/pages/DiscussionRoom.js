import React from 'react'
import RoomNav from '../components/chat-room/RoomNav';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
// import ChatRoom from '../components/chat-room/chatRoom';
import { ActiveChatContext } from '../contexts/activeChatContext';
import MessageRoom from '../components/chat-room/MessageRoom';

function DiscussionRoom() {
    const {theme} = useContext(ThemeContext);
    const {activeChat} = useContext(ActiveChatContext);
  return (
    <>
<div className={`bg-dark ${theme==='dark'?'bg-dark text-white':'bg-white text-dark'}`}>
    <div className="pt-14 pl-5 grid grid-cols-5 md:grid-cols-5 sm:grid-cols-1" style={{width:'100%'}}>
    <div style={{width:'30%',zIndex:'5'}}><RoomNav></RoomNav></div>
    <div className='col-span-4 ml-3' style={{width:'95%',marginTop:'20px'}}><MessageRoom id={activeChat}></MessageRoom></div>
    </div>
</div>
    </>
  )
}

export default DiscussionRoom;