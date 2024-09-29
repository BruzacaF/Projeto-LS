'use client'

import { useEffect, useRef, useCallback, useMemo } from "react";
import 'iconify-icon';
import '@/components/css/main-page-content.css';
import content from "@/components/assets/page-content/main-page-content";
import MainContent from "@/components/mainPage/main-content";

// Organizar o main page para que fique mais limpo e organizado
// Organizar o css do main page
// Criar um arquivo assets com as imagens e icones do main page (opcional)
// Criar um arquivo de contexto para o main page (opcional)
// Refatorar a logica do scroll e portar para um contexto (opcional)

export default function MainPage() {

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const sectionsRefs = useMemo(() => [section1Ref, section2Ref, section3Ref], [section1Ref, section2Ref, section3Ref]);

  const handleScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const currentSectionIndex = sectionsRefs.findIndex((sectionRef: React.RefObject<HTMLDivElement>) =>
      sectionRef.current &&
      sectionRef.current.getBoundingClientRect().top > -100 &&
      sectionRef.current.getBoundingClientRect().top < window.innerHeight / 2
    );

    if (e.deltaY > 0 && currentSectionIndex < sectionsRefs.length - 1) {
      sectionsRefs[currentSectionIndex + 1].current?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.deltaY > 0 && currentSectionIndex === sectionsRefs.length - 1) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    if (e.deltaY < 0 && currentSectionIndex > 0) {
      sectionsRefs[currentSectionIndex - 1].current?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.deltaY < 0 && currentSectionIndex === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [sectionsRefs]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div ref={section1Ref}>
        <MainContent {...content.mainContent} />
      </div>
      <div ref={section2Ref}>
        <MainContent {...content.mainContent2} />
      </div>
      <div ref={section3Ref}>
        <MainContent {...content.mainContent3} />
      </div>
    </>
  );
}


