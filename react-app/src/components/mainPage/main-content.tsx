

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Icon } from '@iconify/react';
import Button from '@/components/button';

interface MainContentProps {
  title: string,
  highlight: string,
  description: string,
  icon: string
  button?: boolean,
  link?: string
}

export default function MainContent(props: MainContentProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,

  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  return (

    <motion.div
      id="MainContent"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100, transition: { duration: 0.6 } },
      }}>

      <div className="main-content" >
        <div className="main-page-content">
          <div className="main-page-content-left">
            <h1 className="main-page-content-title">
              {props.title}
              <br />
              <span className="main-page-content-title-highlight">{props.highlight}</span>
            </h1>
            <p className="main-page-content-description">
              {props.description}
            </p>
            {props.button && (
              <Button buttonSize="medium" textSize="medium" name="Começar" href={props.link} />
            )}
          </div>
          <div className="main-page-content-right">
            {props.icon && <Icon icon={props.icon} className="main-page-content-icon" />}
          </div>
        </div>
      </div>




    </motion.div>




  );
}
