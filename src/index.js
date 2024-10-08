import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';
import global_en from './translations/en/global.json';
import global_ru from './translations/ru/global.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { I18nextProvider } from "react-i18next"
import Nav from './components/Nav';

i18next
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  interpolation: {escapeValue: false},
  lng: 'ru',
  resources: {
    ru: {
      global: global_ru
    },
    en: {
      global: global_en
    },
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Unbounded:wght@200..900&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
        <div className="w-screen h-screen bg-black m-0">
          <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="projects" element={<Projects />} />
          </Routes>
          <div>
            <Layout />
          </div>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
