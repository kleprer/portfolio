import React from 'react'

const About = () => {
  return (
    <div className="w-[70rem] h-screen border-white border-[2px] text-white p-[2rem]">
        <div className="flex items-center align-center gap-[3rem]">
            <img src="/pixelpfp.jpg" alt="my selfie" className="w-[20rem] rounded-lg border-white border-[3px]"/>
            <div >
                <h2><span className="text-[2em]  border-b-[3px] pb-[1rem] border-w-fit-content">Снежана Максимова</span></h2>
                <p className="text-[1.5em] pt-[2rem]">19 лет, Москва</p>
                <p className="mt-[1rem]"><span className="text-[1.5em] pt-[2rem] border-b-[3px] pb-[1rem] border-w-fit-content">МТУСИ, программная инженерия</span></p>
                <p className="pt-[2rem] text-[1em]">амбициозный девелопер и фанат ретро. программирую, рисую, музицирую</p>
                <p className="pt-[1rem] text-[1em]">html, tailwindcss, js, react, C</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default About