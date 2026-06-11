import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ABOUTWORDS } from '../constants/aboutme'



const Textart = () => {
    useGSAP(()=>{
        gsap.to("#word1", 
            {
                 xPercent: -100,
                 duration: 40,
                 ease: "linear",
                 repeat: -1,
                 }
              
        )
        gsap.to("#word2", 
            {
                 xPercent: -100,
                 duration: 55,
                 ease: "linear",
                 repeat: -1,
                 }
              
        )
        gsap.to("#word3", 
            {
                 xPercent: -100,
                 duration: 60,
                 ease: "linear",
                 repeat: -1,
                 }
              
        )
       
    }, [])
  return (
    <>
    <div className="flex gap-2 text-[30px]">
    <p id="word1" className="  w-auto text-nowrap opacity-[20%]  font-mono ">
      {`${ABOUTWORDS[1].words}`}
    </p>
    <p id="word1" className=" w-auto opacity-[20%] text-nowrap  r-[30px] font-mono">
      {`${ABOUTWORDS[1].words}`}    </p>
    </div >
    
    <div className="flex gap-2 text-[30px]">
    <p id="word2" className="  w-auto text-nowrap opacity-[20%]  font-mono ">
      {`${ABOUTWORDS[2].words}`}
    </p>
    <p id="word2" className=" w-auto opacity-[20%] text-nowrap  r-[30px] font-mono">
      {`${ABOUTWORDS[2].words}`}    </p>
    </div >

    <div className="flex gap-2 text-[30px]">
    <p id="word3" className="  w-auto text-nowrap opacity-[20%]  font-mono ">
      {`${ABOUTWORDS[0].words}`}
    </p>
    <p id="word3" className=" w-auto opacity-[20%] text-nowrap  r-[30px] font-mono">
      {`${ABOUTWORDS[0].words}`}    </p>
    </div >
    
    <div className="flex gap-2 text-[30px]">
    <p id="word2" className="  w-auto text-nowrap opacity-[20%]  font-mono ">
      {`${ABOUTWORDS[1].words}`}
    </p>
    <p id="word2" className=" w-auto opacity-[20%] text-nowrap  r-[30px] font-mono">
      {`${ABOUTWORDS[1].words}`}    </p>
    </div >
    
    <div className="flex gap-2 text-[30px]">
    <p id="word2" className="  w-auto text-nowrap opacity-[20%]  font-mono ">
      {`${ABOUTWORDS[2].words}`}
    </p>
    <p id="word2" className=" w-auto opacity-[20%] text-nowrap  r-[30px] font-mono">
      {`${ABOUTWORDS[2].words}`}    </p>
    </div >

    <div className="flex gap-2 text-[30px]">
    <p id="word1" className="  w-auto text-nowrap opacity-[20%]  font-mono ">
      {`${ABOUTWORDS[0].words}`}
    </p>
    <p id="word1" className=" w-auto opacity-[20%] text-nowrap  r-[30px] font-mono">
      {`${ABOUTWORDS[0].words}`}    </p>
    </div >

    </>
  )
}

export default Textart

