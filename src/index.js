import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import { TbWorld } from "react-icons/tb";
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Unbounded:wght@200..900&display=swap" rel="stylesheet"></link>
    <BrowserRouter>
      <div className="w-screen h-screen bg-black">
      
      <div className="h-fit w-fit">
        <div className="bg-black w-screen h-fit pt-[0.5rem] pb-[1rem] sm:pr-[0.5rem] pr-[0] relative">
          <TbWorld className="size-[3rem] relative left-[40%] sm:left-[45%] md:left-[92%] md:fixed text-white w-fit hover:opacity-[50%] hover:cursor-pointer " />
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
        <div>
          <Layout />
        </div>
      </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
