import React from 'react'
import Hero from './pages/Hero'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger  from 'gsap/ScrollTrigger'
import Art_Mike from './pages/Art_Mike'
gsap.registerPlugin(ScrollSmoother, ScrollTrigger) 

const App = () => {
    

    useGSAP(()=>{
     
    ScrollSmoother.create({
	    smooth: 1,
	    effects: true
    });
  },[])
  return (
    <main className="bg-black ">
      <div id="smooth-wrapper">
        <div id="smooth-content" className="bg-black ">
          <Hero/>
          <Art_Mike/>
          <div className="bg-red-300 h-[5000px] "></div>
        </div>
      </div>
    </main>
  )
}

export default App
