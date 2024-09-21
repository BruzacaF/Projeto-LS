'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import 'iconify-icon';
import '@/components/css/main-page-content.css';
import  content  from "@/components/assets/page-content/main-page-content";
import MainContent from "@/components/mainPage/main-content";


// Organizar o main page para que fique mais limpo e organizado
// Organizar o css do main page
// Criar um arquivo assets com as imagens e icones do main page (opcional)
// Criar um arquivo de contexto para o main page (opcional)
// Criar logica para o scroll do main page


export default function MainPage() {

  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const contents = [
    <MainContent key="mainContent1" {...content.mainContent} />,
    <MainContent key="mainContent2" {...content.mainContent2} />,
    <MainContent key="mainContent3" {...content.mainContent3} />
  ];

  return (
    <div className="main-page">
      {contents.map((content) => (
        content
      ))}
    </div>
  );
}
