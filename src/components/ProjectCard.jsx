import React from 'react'

const ProjectCard = () => {
  return (
    <div className="min-h-[28.5rem] w-auto xl:w-[30rem] xl:w-[70rem] h-fit  text-white p-[1rem] md:p-[2rem]  bg-black">
        <div className="flex flex-col lg:flex-row items-center align-center gap-[2rem] pt-[2rem]">
            <img src="/testtask.gif" alt="гифка с примером работы интерфейса" className="w-[27rem] m-0"/>
            <div className="w-auto  m-auto sm:m-0 md:m-auto text-center md:text-left ">
                <h2><span className="text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content">Know your clients</span></h2>
                <p className="mt-[1rem]">Тестовое задание для fullstack стажировки</p>
                <p className="text-[1em] pt-[2rem]">Получение списка клиентов по логину-паролю на основе сгенерированной базы данных и вносить в нее изменения.</p>
                <p className="mt-[1rem]">html, tailwindcss, react, python, sqlite</p>
                <a href="https://github.com/kleprer/test_task" target="_blank"><button className="mt-[2rem] md:w-fit sm:w-[316px] m-auto border-[2px] border-white p-[10px] hover:opacity-[50%]">смотреть исходный код</button></a>
                
            </div>
        </div>
    </div>
  )
}

export default ProjectCard