import React from 'react'

const About = () => {
  return (
    <div className="w-auto xl:w-[30rem] xl:w-[70rem] h-fit border-white border-[2px] text-white p-[1rem] md:p-[2rem]">
        <div className="flex flex-col items-center align-center md:gap-[2rem] md:flex-row">
            <img src="/pixelpfp.jpg" alt="my selfie" className="m-0 w-[20rem] rounded-lg border-white border-[3px]"/>
            <div className="w-auto lg:max-w-[70%] m-auto sm:m-0 md:m-auto">
                <h2 className="text-center md:text-left"><span className="text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content">Снежана Максимова</span></h2>
                <p className="text-center md:text-left text-[1.5em] pt-[2rem]">19 лет, Москва</p>
                <p className="text-center md:text-left mt-[1rem]"><span className="text-[1.5em] pt-[2rem] border-b-[3px] pb-[0.5rem] border-w-fit-content">МТУСИ, программная инженерия</span></p>
                <p className="text-center md:text-left pt-[2rem] text-[1em]">амбициозный девелопер и фанат ретро. программирую, рисую, музицирую.</p>
                <p className="text-center md:text-left pt-[1rem] text-[1em]">html, css, tailwindcss, js, react, C</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default About