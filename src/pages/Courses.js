import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import CourseCard from '../components/cards/course/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { COURSES_LOADED_SUCCESS, ERROR_LOADING_COURSE, LOADING_COURSES, REQUEST_COURSES } from '../constants/courseconstant';
import { LoaderIcon } from 'react-hot-toast';
import { useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { loadCourses, loadFilteredCourse } from '../slices/courseSlice';

function Courses() {
    const [progress,setProgress] = useState();
    const {subjects,filteredCourses,categories,courses,status} = useSelector(state=>state.courses)
    const {theme} = useContext(ThemeContext);
 const dispatch = useDispatch();
    const [filter,setFilter] = useState({category:'none',subject:'none'});
    const changeFilter = (event)=>{
      setFilter({...filter,[event.target.id]:event.target.value});}
      useEffect(()=>{
 
        let filtered = courses.filter((course)=>{ 
           
          const categMatch = filter.category === 'none' || course.categ === filter.category;
          const subjectMatch = filter.subject === 'none' || course.subject === filter.subject;
       
        //   const subjectMatch = filter.subject === 'none' || paper.subject_code === filter.subject;
          return categMatch && subjectMatch;
    
        });
        console.log(filtered)
    filtered.length>0&&dispatch(loadFilteredCourse(filtered));
    
    },[filter,dispatch])
  useEffect(()=>{
    if(status===REQUEST_COURSES){
        setProgress(10);
    }
    if(status===LOADING_COURSES){
        setProgress(50);
    }
    if(status===COURSES_LOADED_SUCCESS||status===ERROR_LOADING_COURSE){
        setProgress(100)
    }
  },[status]);
 
  return (
<>
{status===LOADING_COURSES && <LoadingBar
        color={`${theme==='dark'?'#0dffeb':'red'}`}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />}
<div style={{minHeight:'90vh'}} className={`${theme==='dark'?'text-white bg-dark ':'text-dark bg-white '} pt-8 pl-14`}>
<div className={`container ${theme==='dark'?'dark:bg-dark':''}`}>

    {/* Filters */}
<div className={`mt-14 grid grid-cols-1 md:grid-cols-3  place-content-center mb-5 ${theme==='dark'?'text-white':''} `}>
    <div className="container my-5">
        <select  onChange={changeFilter} defaultValue={filter.subject} className={` h-14 px-5 ${theme==='dark'?'dark:bg-dark':''} border-2 rounded-md ${theme==='dark'?'border-cyan':'border-gray'} `} name="subject" id="subject">
        <option value="none" selected>Please Select A Subject</option>
        {subjects.map((subject)=>{return(<option key={subject} value={subject}>{subject}</option>)})}
        </select>
    </div>
    <div className="container  my-5">
        <select  onChange={changeFilter} defaultValue={filter.category} className={`h-14 px-5 align-items-center ${theme==='dark'?'dark:bg-dark':''} border-2 rounded-md ${theme==='dark'?'border-cyan':'border-gray'} `} name="category" id="category">
        <option value="none" selected>Please Select A Year</option>
          {categories.map((category)=>{return(<option key={category} value={category}>{category}</option>)})}
        </select>
    </div>

</div>

{/* Courses */}

<div className={`container ${theme==='dark'?'text-white':''}`}>
<div className= " flex justify-center mt-14" ><h1 className='text-4xl font-bold'>{courses.length} Courses Found</h1></div>

<div className="grid grid-cols-1 md:grid-cols-3 place-content-center ">
{filteredCourses.length>0&&filteredCourses.map((course)=>{return(<CourseCard course={course}>
    
    </CourseCard>)})}
</div>
</div>
    </div>


</div>
</>
  )
}

export default Courses