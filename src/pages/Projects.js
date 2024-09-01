import React from 'react'
import {useEffect, useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import Layout from '../components/Layout'
const Projects = () => {
  const [projectId, changeProjectId] = useState(1);
  console.log(projectId);
  const fakeProjects = [{
    id: 1,
    source: '/testtask.gif',
    title: 'Know your clients',
    desc: 'Тестовое задание для fullstack стажировки',
    longDesc: 'Получение списка клиентов по логину-паролю на основе сгенерированной базы данных и вносить в нее изменения.',
    techs: 'html, tailwindcss, react, python, sqlite',
    href: 'https://github.com/kleprer/test_task'
  },
  {
    id: 2,
    source: '/testimage1.jpg',
    title: 'Это портфолио',
    desc: ' ',
    longDesc: 'Простое, но стильное приложение, на котором вы сейчас можете ознакомиться с моими работами:)',
    techs: 'html, tailwind css, react',
    href: 'https://github.com/kleprer/portfolio'
  },
  {
    id: 3,
    source: '/art.jpeg',
    title: 'Диджитал-арт',
    desc: 'Собрание цифрового творчества',
    longDesc: ' ',
    techs: ' ',
    href: 'https://www.tumblr.com/blog/kleprer2'
  },];

  

  const swipeProject = (side, projectId) => {
    const id = projectId;
    if (side === 1) {
      if (projectId === 1) {
        changeProjectId(fakeProjects.length);
      } else {
        changeProjectId(id - 1);
      }
    }
    if (side === 2) {
      if (projectId === fakeProjects.length ) {
        changeProjectId(1);
      } else {
        changeProjectId(id + 1);
      }
    }
  };

  return (
    <div className="w-auto bg-black text-white min-h-[32rem] pb-[1rem]">
      <div className="bg-black text-white h-fit">
        <div className="flex flex-row gap-[1rem]">
          <button onClick={() => swipeProject(1, projectId)}><span className="text-[3em] hover:opacity-[50%]">&lt;</span></button>
          <ProjectCard project={fakeProjects[projectId - 1]}/>
          <button onClick={() => swipeProject(2, projectId)}><span className="text-[3em] hover:opacity-[50%]">&gt;</span></button>
        </div>
        {/* <Layout /> */}
        
      </div>
      
    </div>
  )
}

export default Projects;