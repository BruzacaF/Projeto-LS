'use client'


import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import 'iconify-icon';
import '@/components/css/main-page-content.css';
import  content  from "@/components/assets/page-content/main-page-content";
import MainContent from "@/components/mainPage/main-content";
import Link from "next/link";


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

      <Link href= "/components">
        <motion.button
          className="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Play Game
        </motion.button>
      </Link>

    </div>
  );


}
