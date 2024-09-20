
import { motion } from "framer-motion";
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

  return (
    <>

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
              {props.button && (
                <Button buttonSize="medium" textSize="medium" name="Começar" href={props.link}/>
              )}
            </p>
          </div>
          <div className="main-page-content-right">
            {props.icon && <Icon icon={props.icon} className="main-page-content-icon" />}
          </div>
        </div>
      </div>

      <Icon icon="line-md:chevron-double-down" width="2rem" height="2rem" className="Guide-Down" />

    </>
  );
}
