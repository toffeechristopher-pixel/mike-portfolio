import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import SplitText from 'gsap/src/SplitText';
import arrow from '../assets/svg-elements/Line2.svg'



gsap.registerPlugin(TextPlugin, SplitText, useGSAP);

const Hero = () => {

useGSAP(()=>{
  const split = SplitText.create("#HerosectionText", {
  type: "words"});

  const arrowEase = "power"

  const tl1 = () => {
    const tl = gsap.timeline({defaults: {ease: arrowEase}});
    tl.from("#arrow3", { x: -1000, y: 500 , opacity: 0})
    
    return tl
  }

  const tl2 = () => {
    const tl = gsap.timeline({defaults: {ease: arrowEase}});
    tl.from("#arrow2", {x: -1000, y: 500 , opacity: 0})
    return tl
  }
    const tl3 = () => {
    const tl = gsap.timeline({defaults: {ease: arrowEase}});
    tl.from("#arrow1", { x: -1000, y: 500, opacity: 0})
    return tl
  }

  const heroTextTL = () => {
    const tl = gsap.timeline({defaults: {ease: arrowEase}});
    tl.from(split.words, {
      y:20,
      opacity:0,
      stagger: 0.02,
      duration: 0.3,
      ease: "back.out"
    })
    return tl
  }
  const mainTimeline = gsap.timeline()
  
  mainTimeline.add(tl1()).add(tl2()).add(tl3()).add(heroTextTL())
},[])
  return (
    <div className="flex min-h-screen items-center justify-center gap-[310px] ">
      <nav className="font-custom text-2xl relative bottom-[250px] left-[90px]">
        <ul id="HerosectionText">
          <li><a  href="#" className=" hover:text-amber-500">Introduction</a></li>
          <li><a href="">Skills & Services</a></li>
          <li><a href="">Projects & Testimonies</a></li>
        </ul>
      </nav>

      <section className="flex justify-center overflow-x-auto pointer-events-none">
      <img src={arrow} className="w-[1500px] h-auto absolute top-[60px] right-[625px]"  id="arrow3"/>
      <img src={arrow} className="w-[1300px] h-auto absolute top-[200px] right-[645px]" id="arrow2"/>
      <img src={arrow} className="w-[1100px] h-auto absolute top-[350px] right-[685px]" id="arrow1"/>
     
      </section>

      <section className='text-orange-500 relative top-[140px] left-[150px]' id="HerosectionText">
        <h1 id="heroText" className="
        text-5xl
      text-black 
        font-custom w-[400px] 
        text-right 
        "
        >
        Grow and Innovate, <br/>Build with <a href="#" className="text-orange-500 ">Mike</a>
        </h1>
        <p className="text-black text-right text-2xl relative right-[210px] w-[620px]  ">
          Traffic is good, but growth is better. We blend data-driven marketing strategies with clean, high-performing digital development to put your brand in front of the right audience. Let’s build an online presence that doesn’t just look great, but actively scales your business.
        </p>
      </section>
      </div>
  )
}

export default Hero

