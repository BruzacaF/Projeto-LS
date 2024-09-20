'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import 'iconify-icon';
import '@/app/components/css/main-page-content.css';
import  content  from "@/app/components/assets/page-content/main-page-content";
import MainContent from "@/app/components/mainPage/main-content";


export default function MainPage() {

  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const contents = [
    <MainContent {...content.mainContent} />,
    <MainContent {...content.mainContent2} />,
    <MainContent {...content.mainContent3} />
  ];


  return (

    <div className="main-page">
      {contents.map((content, index) => (
        <div key={index} ref={refs[index]}>
          {content}
        </div>
      ))}
    </div>


   
  );
}
