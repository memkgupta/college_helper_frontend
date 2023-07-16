import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../contexts/themeContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'

function CourseCard({course}) {
  const {theme} = useContext(ThemeContext)
  const [image,setImage] = useState('https://via.placeholder.com/640x360');
  return (
    <div className="my-14 mx-14 w-[300px] rounded-md border">
    <LazyLoadImage
      src={image}
      alt={course.name}
      effect='blur'
      
      className="h-[200px] w-full rounded-md object-cover"
      onLoad={()=>{setImage(course.thumbnail)}}
    />
    <div className="p-4">
      <h1 className="text-lg font-semibold">{course.name}</h1>
     
      <Link
      to={`/course/${course._id}`}
        type='button'
        className={`mt-4 rounded-lg px-2.5 py-1 text-[10px] font-semibold border-2 ${theme==='dark'?'border-white':'border-black'} ${theme==='dark'?'text-white':'text-dark'} shadow-sm ${theme==='dark'?'hover:bg-cyan':'hover:bg-dark'}  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
      >
        View
      </Link>
    </div>
  </div>
  )
}

export default CourseCard