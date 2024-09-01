import React, { useEffect } from 'react'
import { TbWorld } from "react-icons/tb";
import {useTranslation} from 'react-i18next';
import {useState} from 'react';

const Nav = () => {
    const [t, i18n] = useTranslation("global");
    const [loc, changeLoc] = useState('en');
    let lang = 'en';
    const handleLocaleChange = (loc) => {
        if (loc == 'ru') changeLoc('en')
            else changeLoc('ru');
        i18n.changeLanguage(loc);
        
        console.log(i18n.language, lang, loc)
    }

    
  return (
    <div className="bg-black w-screen h-fit pt-[0.5rem] pb-[1rem] sm:pr-[0.5rem] pr-[0] relative">
        <TbWorld onClick={() => handleLocaleChange(loc)} className="size-[3rem] relative left-[40%] sm:left-[45%] md:left-[92%] md:fixed text-white w-fit hover:opacity-[50%] hover:cursor-pointer " />
    </div>
  )
}

export default Nav;