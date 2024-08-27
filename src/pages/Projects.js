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
    techs: 'html, tailwindcss, react, python, sqlite'
  },
  {
    id: 2,
    source: '/testimage1.jpg',
    title: 'Project Shadow',
    desc: 'Angst driven alien hedgehog born in space',
    longDesc: 'Can you see all of me walk into my mystery step inside and hold on for dear life do you remember me capture you or',
    techs: 'something something something'
  },
  {
    id: 3,
    source: '/testimage2.jpg',
    title: 'Shadow with a gun',
    desc: 'WHO SOLD THIS HEDGEHOG A FUCKING GUN',
    longDesc: 'now all of you are fucking doomed bye bye losers',
    techs: 'the whole enginess of the world'
  }];

  

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
    <div className="bg-black text-white w-screen h-screen">
      <div className="bg-black text-white w-fit h-fit">
        <div className="flex flex-row gap-[1rem]">
          <button onClick={() => swipeProject(1, projectId)}><span className="text-[3em] hover:opacity-[50%]">&lt;</span></button>
          <ProjectCard project={fakeProjects[projectId - 1]}/>
          <button onClick={() => swipeProject(2, projectId)}><span className="text-[3em] hover:opacity-[50%]">&gt;</span></button>
        </div>
        <Layout />
        
      </div>
      
    </div>
  )
}

export default Projects;