import React from 'react'
import {useEffect, useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../translations/ru/global.json'
const Projects = () => {
  const [projectId, changeProjectId] = useState(1);
  console.log(projectId);
  const fakeProjects = [projects.projects];

  

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
          <ProjectCard project={projectId}/>
          <button onClick={() => swipeProject(2, projectId)}><span className="text-[3em] hover:opacity-[50%]">&gt;</span></button>
        </div>
        {/* <Layout /> */}
        
      </div>
      
    </div>
  )
}

export default Projects;