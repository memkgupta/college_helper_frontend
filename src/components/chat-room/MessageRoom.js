import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {CiMenuKebab} from 'react-icons/ci'
function MessageRoom({id}) {
  return (
   <>
     <div className=" rounded bg-orange container text-white flex justify-center">
{id}
    </div>
<div className="container">
    <div className=" flex justify-between bg-dark p-5">
        {/* Room Dp */}
        <div className=" rounded-full flex">
            <LazyLoadImage
            src='https://i.pinimg.com/originals/c0/d3/48/c0d348585382d16204a45c09138c7f26.jpg'
            effect='blur'
            width={'50px'}
className='rounded-full'
            ></LazyLoadImage>
           <div className='ml-3'>
           <p className='text-white '>{'Room 1'}</p>
           <span className='text-sm text-white opacity-75'>{'Members List'}</span>
           </div>
        </div>
        <div className="">
            <button className='text-white bg-dark rounded-full w-14 h-14'><CiMenuKebab></CiMenuKebab></button>
        </div>
    </div>
</div>
<div className="container rounded p-5">
    fd
</div>
   </>
  )
}

export default MessageRoom