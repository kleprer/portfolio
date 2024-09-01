import React from 'react'

const ProjectCard = (props) => {
  console.log(props.project);
  let project = props.project;
  console.log(project);
  return (
    <div className="min-h-[28.5rem] w-auto xl:w-[70rem] h-fit  text-white p-[1rem] md:p-[2rem] bg-black">
        <div className="flex flex-col lg:flex-row items-center align-center gap-[2rem] md:pt-[2rem]">
            <img src={project.source} alt="изображение работы проекта" className="max-h-[24rem] max-w-[25rem] m-0"/>
            <div className="w-auto  m-auto sm:m-0 md:m-auto text-center md:text-left ">
                <h2><span className="text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content">{project.title}</span></h2>
                <p className="mt-[1rem]">{project.desc}</p>
                <p className="text-[1em] pt-[2rem]">{project.longDesc}</p>
                <p className="mt-[1rem]">{project.techs}</p>
                {
                  (project.id == 3) &&
                    <a href={project.href} target="_blank"><button className="mt-[2rem] md:w-fit sm:w-[316px] m-auto border-[2px] border-white p-[10px] hover:opacity-[50%]">смотреть картинки</button></a>
                  
                }
                {
                  (project.id != 3) &&
                    <a href={project.href} target="_blank"><button className="mt-[2rem] md:w-fit sm:w-[316px] m-auto border-[2px] border-white p-[10px] hover:opacity-[50%]">смотреть исходный код</button></a>
                  
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default ProjectCard