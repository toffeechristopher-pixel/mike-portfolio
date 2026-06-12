import React from 'react'
import Mike from '../public/img/Mike.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to("#decorativetext", {
      xPercent: -106,
      duration:20,
      ease:"linear",
      repeat:-1
    })
    gsap.to("#decorativetext2", {
      xPercent: -106,
      duration:25,
      ease:"linear",
      repeat:-1
    })

    gsap.to("#portfolio-block", {
      scrollTrigger:{
        trigger: "#portfolio-block",
        start:"-100px center",
        markers:true,
        toggleActions: "restart none none pause",
        scrub:true
      },
      y:-100,
   
    })
    
  })

  return (
    <section className="h-[730px] flex flex-col">

    <section className='relative top-[30px] w-[600px] h-[40px] left-[30px]'>
      <nav className="text-gray-400 m-[5px] flex gap-[50px] text-[10px] font-sanchez justify-center items-center">
        <img src="#" className="l-[30px] w-[30px]"/>
        <a href="#" >Introduction</a>
        <a href="#" >Skills & Services</a>
        <a href="#">Upscale</a>
        <a href="#" className='bg-white text-black p-[1px] pl-5 pr-5 h-[20px]' >Contacts</a>
      </nav>
    </section>

    <section>
        <figure className="absolute bottom-[900px] right-[110px] w-auto z-10">
            <img src={Mike} className=" w-[1300px] h-auto "/>
        </figure>
      <section>
        <div className="text-white flex relative top-[130px] "id="decorativetext">   
            <span className="font-perandory text-[180px] gradient-text w-auto text-nowrap"  >WEB DESIGN USER EXPERIENCE USER </span>
            <span className="font-perandory text-[180px] gradient-text w-auto text-nowrap"  >WEB DESIGN USER EXPERIENCE USER </span>
        </div>
        <div className='flex ' id="decorativetext2">
          <span className="text-white font-spartan text-[40px] text-nowrap relative z-0 top-[40px]">MARKETING BRANDING STRATEGY GROWTH ENGAGEMENT VISIBILITY REACH CONVERSION  </span> 
           <span className="text-white font-spartan text-[40px] text-nowrap relative z-0 top-[40px] ml-[20px]">MARKETING BRANDING STRATEGY GROWTH ENGAGEMENT VISIBILITY REACH CONVERSION </span> 
        </div>
        </section>
    </section>

    <section className="text-white w-[320px] relative left-[1000px] top-[210px] z-10" id="portfolio-block">
            <h2 className="font-spartan text-4xl w-[310px]  text-right"> <b>Portfolio </b></h2>
            <h3 className="font-sanchez text-2xl w-[310px]  text-right ">Michael Ticzon Bartolome</h3>
    </section>

    </section>
  )
}

export default Hero

