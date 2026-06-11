import React from 'react'
import AboutmeTextBlock from '../components/AboutmeTextBlock'
import { ABOUT } from '../constants/aboutme.js' 
import MikeImage from "../assets/Mike.png"
import Textart from '../components/Textart.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const AboutMe = () => {

    


  return (
    <section id="Aboutme" className="
    flex-col justify-center items-center 
    border-solid  border-[1px]
    h-[900px]
    ">
      <section id="AboutmeTextBlock" className='flex w-[100%] flex-wrap ml-[140px] mb-25 mt-5'>
        
        <AboutmeTextBlock title={ABOUT[0].TITLE}text={ABOUT[0].TEXT}/>
        <AboutmeTextBlock title={ABOUT[1].TITLE}text={ABOUT[1].TEXT}/>
        <AboutmeTextBlock title={ABOUT[2].TITLE}text={ABOUT[2].TEXT} className={`relative right-[120px] mb-[30px]`}/>
        <AboutmeTextBlock title={ABOUT[3].TITLE}text={ABOUT[3].TEXT}/>
      </section>
        
      <section className="h-[350px] flex m-[30px]">
        <div id="Art" className="relative top-[30px] right-[30px]">
            <Textart id="words"/>
        </div>

        <figure>
            <img src={MikeImage} alt="Mike Bartolome" className="h-[346px] width-[20px] absolute left-[950px] " />
            <figcaption></figcaption>
        </figure>


        <div className='flex justify-center items-center'>
        <h1 className="text-[100px] font-custom absolute left-[250px] ">ABOUT ME</h1>
        </div>
      </section>
    </section>
  )
}

export default AboutMe
