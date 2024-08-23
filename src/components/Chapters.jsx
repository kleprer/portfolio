import React from 'react'

const Chapters = () => {
  return (
    <div className="w-auto flex flex-col sm:flex-row text-white mt-[2rem] ">
        <button className="w-[20rem] sm:w-[28%] m-auto p-[10px]  border-[2px] mb-[15px] hover:opacity-[50%]">Обо мне</button>
        <button className="w-[20rem] sm:w-[28%] m-auto p-[10px]  border-[2px] mb-[15px] hover:opacity-[50%]">Проекты</button>
        <button className="w-[20rem] sm:w-[28%] m-auto p-[10px] border-[2px] mb-[15px] hover:opacity-[50%]">Контакты</button>
        
    </div>
  )
}

export default Chapters;