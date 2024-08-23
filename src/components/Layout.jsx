import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Chapters = () => {
  return (
    <div className="w-auto flex flex-col sm:flex-row text-white mt-[2rem] md:mt-[5rem]">
        <Link to='/' className="text-center w-[20rem] sm:w-[28%] m-auto p-[10px]  border-[2px] mb-[15px] hover:opacity-[50%]"><button >Обо мне</button></Link>
        <Link to='/projects' className="text-center w-[20rem] sm:w-[28%] m-auto p-[10px]  border-[2px] mb-[15px] hover:opacity-[50%]"><button >Проекты</button></Link>
        <Link to='/contacts' className="text-center w-[20rem] sm:w-[28%] m-auto p-[10px] border-[2px] mb-[15px] hover:opacity-[50%]"><button >Контакты</button></Link>
        <Outlet />
    </div>
  )
}

export default Chapters;