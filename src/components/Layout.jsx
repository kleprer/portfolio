import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
const Chapters = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-auto h-[100%] flex flex-col sm:flex-row text-white gap-[1rem] bg-black mb-fill">
        <Link to='/' className="text-center w-[20rem] sm:w-[28%] m-auto p-[10px]  border-[2px] mb-[15px] hover:opacity-[50%]"><button >{t("navigation.info")}</button></Link>
        <Link to='/projects' className="text-center w-[20rem] sm:w-[28%] m-auto p-[10px]  border-[2px] mb-[15px] hover:opacity-[50%]"><button >{t("navigation.works")}</button></Link>
        <Link to='/contacts' className="text-center w-[20rem] sm:w-[28%] m-auto p-[10px] border-[2px] mb-[15px] hover:opacity-[50%]"><button >{t("navigation.contacts")}</button></Link>
        <Outlet />
    </div>
  )
}

export default Chapters;