import React from 'react'
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';

const About = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-auto xl:w-[30rem] xl:w-[70rem] min-h-[32rem] text-white p-[1rem] md:p-[2rem]">
        <div className="flex flex-col items-center align-center md:gap-[2rem] md:flex-row">
            <img src="/pixelpfp.jpg" alt="my selfie" decoding="async" loading="lazy" className="bg-cover m-0 w-[20rem] rounded-lg border-white border-[3px]"/>
            <div className="w-auto lg:max-w-[70%] m-auto sm:m-0 md:m-auto  md:text-left text-center">
                <h2><span className="text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content">{t("about.name")}</span></h2>
                <p className="text-[1.5em] pt-[2rem]">{t("about.place")}</p>
                <p className="mt-[1rem]"><span className="text-[1.5em] pt-[2rem] border-b-[3px] pb-[0.5rem] border-w-fit-content">{t("about.status")}</span></p>
                <p className="pt-[2rem] text-[1em]">{t("about.about")}.</p>
                <p className="pt-[1rem] text-[1em]">{t("about.stack")}</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default About