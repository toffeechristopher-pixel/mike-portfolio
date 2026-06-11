import React from 'react'

const AboutmeTextBlock = ({title, text, className}) => {
  return (
    <section className={`${className} text-[15px] flex w-[400px] text-[15px] mr-[40px] mt-[40px]`}>
      <h2 className="font-custom ">{title}</h2>
        <p className = "relative left-[30px]">{text}</p>
    </section>
  )
}

export default AboutmeTextBlock
