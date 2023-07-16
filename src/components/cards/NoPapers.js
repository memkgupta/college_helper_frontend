import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import no_results from '../../images/no_results.png'
function NoPapers({theme}) {
  return (
    <>
        <div style={{width:'50%'}} className={`image-container ml-auto mr-auto `}>
<LazyLoadImage src={no_results} effect='blur'></LazyLoadImage>

    </div>
    <div className={`flex justify-center font-bold ${theme==='dark'?'text-white':'text-dark'}`}>
        <h1 className='text-4xl'>Ooops ! No results</h1>
    </div>
    </>

  )
}

export default NoPapers