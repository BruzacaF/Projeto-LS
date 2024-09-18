'use client'

import Header from "@/app/components/header";
import Button from "./components/button";
import { Icon } from '@iconify/react';
import 'iconify-icon';
import Content1 from '@/app/components/mainPage/main-content-1';
import Content2 from '@/app/components/mainPage/main-content-2';
import { useState, useEffect, useRef } from "react";
import '@/app/components/css/main-page-content.css';
import themeThoggle from "./lib/theme-change";

export default function Home() {

  const contentsToLoad = [<Content1 />, <Content2 />];
  const [contentIndex, setContentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [contentIndex]);

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOnScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollTimeout.current) {
      return;
    }

    if (event.deltaY > 0) {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentsToLoad.length);
    } else {
      setContentIndex((prevIndex) => (prevIndex - 1 + contentsToLoad.length) % contentsToLoad.length);
    }
    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 500); // Ajustar o delay para o valor desejado
  }

  return (
    <>
      <Header />
      <div className="content" ref={contentRef} onWheel={handleOnScroll}>
        {contentsToLoad[contentIndex]}
        {themeThoggle()}
      </div>

    </>
  );


}
