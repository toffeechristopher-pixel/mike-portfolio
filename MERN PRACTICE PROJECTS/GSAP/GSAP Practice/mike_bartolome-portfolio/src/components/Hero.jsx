import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import SplitText from 'gsap/src/SplitText';
gsap.registerPlugin(TextPlugin, SplitText, useGSAP);

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-[310px] ">
      <nav className="font-custom text-1xl relative bottom-[250px]">
        <ul>
          <li>Introduction</li>
          <li>Skills & Services</li>
          <li>Projexts & Testimonies</li>
        </ul>
      </nav>

      <section>
        art
      </section>

      <section id="Herotext" className='text-orange-500 relative top-[140px] left-[150px]'>
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

