import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
 gsap.registerPlugin(useGSAP, ScrollTrigger)

const Art_Mike = () => {
   
    useGSAP(()=>{
        
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: "#flowing-text",
            start: "360px center",
            pin:true,
            markers: true,
            scrub:true
            },
            
        })
        
        tl.from(".flowing-text-1", {
           xPercent:120,
           ease:"power1"
           
        },0)

        tl.from("#flowing-text-2", {
            xPercent:-120,
            ease:"power1"
        },0)
       
    })
  return (
    <section className="
    bg-white mt-[0px] flex flex-col font-perandory gap-[20px] w-[2000px]
      text-[130px] no-wrap"
    id="flowing-text"   
    >
      
      <span className='flowing-text-1' id=""> INNOVATE - GROW - OPTIMIZE - ADVERTISE - MARKET  </span>
      <span className="bg-black text-white pt-[50px] pb-[50px]" id="flowing-text-2"> MICHEAL TICZON MICHEAL TICZON MICHEAL TICZON</span>
      <span className='flowing-text-1' id=""> DESGIN - MAXIMIZE - KPI - EDIT - AUDIT - PROFIT - SCALE</span>
    </section>
  )
}

export default Art_Mike
