import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Layout from '../components/Layout'
const Projects = () => {
  return (
    <div className="bg-black text-white w-screen h-screen">
      <div className="bg-black text-white w-fit h-fit">
        <ProjectCard />
        <Layout />
      </div>
    </div>
  )
}

export default Projects