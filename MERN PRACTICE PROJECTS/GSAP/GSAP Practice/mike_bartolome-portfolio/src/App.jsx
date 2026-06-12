import React from 'react'
import Hero from './pages/Hero'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger  from 'gsap/ScrollTrigger'
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
          <div className="h-[900px]"></div>
        </div>
      </div>
    </main>
  )
}

export default App
