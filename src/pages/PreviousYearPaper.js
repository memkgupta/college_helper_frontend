import React, { Suspense, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/themeContext';
import { Link } from 'react-router-dom';
import { AiOutlineFolderAdd } from "react-icons/ai";
import {BsDownload} from "react-icons/bs"
import LoadingBar from 'react-top-loading-bar';

import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {filteredPapers, loadFilteredPapers, loadPapers} from '../slices/paperSlice'
import NoPapers from '../components/cards/NoPapers';
import { LOADING_PAPERS, PAPERS_LOADING_ERROR, PAPERS_LOADING_SUCCESS, REQUEST_PAPERS } from '../constants/paperconstant';
function PreviousYearPaper() {
  const dispatch = useDispatch();
  const [progress,setProgress] = useState(0);
  const {subjects,universities,years,papers,filteredPapers,status} = useSelector(state=>state.papers)
    const {theme,setTheme} = useContext(ThemeContext);

    const [filter,setFilter] = useState({university:'none',year:'none',subject:'none'});
    const changeFilter = (event)=>{
      setFilter({...filter,[event.target.id]:event.target.value});console.log(event.target.id)}
    

      useEffect(()=>{
        let filtered = papers.filter((paper)=>{ 
          const universityMatch = filter.university === 'none' || paper.university === filter.university;
          const yearMatch = filter.year === 'none' || paper.year === parseInt(filter.year);
          const subjectMatch = filter.subject === 'none' || paper.subject_code === filter.subject;
          return universityMatch && yearMatch && subjectMatch;

        });
        console.log(filtered)
    dispatch(loadFilteredPapers(filtered));

    },[filter,dispatch])
    useEffect(()=>{
      if(status===REQUEST_PAPERS){
          setProgress(10);
      }
      if(status===LOADING_PAPERS){
          setProgress(50);
      }
      if(status===PAPERS_LOADING_SUCCESS||status===PAPERS_LOADING_ERROR){
          setProgress(100)
      }
    },[status])
  return (
    <>
<LoadingBar
        color={`${theme==='dark'?'#0dffeb':'red'}`}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Toaster position='top-center'></Toaster>
     <div style={{height:'90vh'}} className={` ${theme==='dark'?'dark:bg-dark':''}`}>
 <div className={`container ${theme==='dark'?'dark:bg-dark':''}`}>
<div className={`flex justify-center mb-5 ${theme==='dark'?'text-white':''} `}>
    <div className="container">
        <select  onChange={changeFilter} defaultValue={filter.university} className={` h-14 px-5 ${theme==='dark'?'dark:bg-dark':''} border-2 rounded-md ${theme==='dark'?'border-cyan':'border-gray'} `} name="university" id="university">
        <option value="none" selected>Please Select A University</option>
        {universities.map((university)=>{return(<option key={university} value={university}>{university}</option>)})}
        </select>
    </div>
    <div className="container ">
        <select  onChange={changeFilter} defaultValue={filter.year} className={`h-14 px-5 align-items-center ${theme==='dark'?'dark:bg-dark':''} border-2 rounded-md ${theme==='dark'?'border-cyan':'border-gray'} `} name="year" id="year">
        <option value="none" selected>Please Select A Year</option>
          {years.map((year)=>{return(<option key={year} value={year}>{year}</option>)})}
        </select>
    </div>
    <div className="container">
        <select  onChange={changeFilter} defaultValue={filter.subject} className={` h-14  px-5 ${theme==='dark'?'dark:bg-dark':''} border-2 rounded-md ${theme==='dark'?'border-cyan':'border-gray'} `} name="subject" id="subject">
        <option value="none" selected>Please Select Subject</option>
        {subjects.map((subject)=>{return(<option key={subject.code} value={subject.code}>{subject.name}</option>)})}
        </select>
    </div>
</div>

 <ul role="list" className={`divide-y  ${theme==='dark'?'dark:bg-dark':''}`}>
{filteredPapers.length>=1?filteredPapers.map((paper)=>{
  return(

   <li key={paper._id} className={`mb-4 border-2 rounded-xl ${theme==='dark'?'border-cyan':'border-gray'} container shadow-sm ${theme==='dark'?'shadow-cyan':'shadow-gray'} hover:shadow-2xl ${theme==='dark'?'shadow-cyan':'shadow-gray'}  flex justify-between gap-x-6 px-8 py-5 bg-white ${theme==='dark'?'dark:bg-dark':''}`}>
    <div className={`${theme==='dark'?'text-white':''}  flex gap-x-4`}>
      <Suspense fallback="Loading">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={paper.logo} alt=""/>
      </Suspense>
     
      <div className="min-w-0 flex-auto">
      <p className="text-sm font-semibold leading-6 text-gray-900">{paper.exam_name}</p> &nbsp; <p className="text-sm font-semibold leading-6 text-gray-900">{paper.subject_code}:{paper.subject_name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{paper.year}</p>
      </div>
    </div>
    <div className={`hidden sm:flex sm:flex-col sm:items-end ${theme==='dark'?'text-white':''}`}>
      <Link  to={`/paper/${paper._id}`} className="text-lg leading-6 text-gray-900">{'View ->'}</Link>
      <div className="flex">
      <button  onClick={(e)=>{toast.success("Paper Saved SucessFully")}} className=" mr-5 mt-1 text-lg leading-5 text-gray-500"><AiOutlineFolderAdd></AiOutlineFolderAdd></button>
      <a  download={paper.pdf_link} href={paper.pdf_link} target="_blank" onClick={(e)=>{toast.success("Paper Downloaded SucessFully")}} className="mt-1 text-lg leading-5 text-gray-500"><BsDownload></BsDownload></a>

      </div>
      
    </div>
  </li>

  )
}):<li><NoPapers theme={theme}></NoPapers></li>}

</ul>

 </div>
 </div>
    </>

  )
}

export default PreviousYearPaper