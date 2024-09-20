import Button from "../button";
import { Icon } from '@iconify/react';
import '@/app/components/css/main-page-content.css';


export default function Content1 () {

    return (
        <div className="content">
        <div className="hero-box">
          <div className="hero-box-content">
            <h1 className="hero-box-title">Letra a Letra</h1>
            <p className="hero-box-subtitle">Aprenda a ler e escrever de forma divertida</p>
            <Button name="Começar" buttonSize="large" textSize="large" />
          </div>
        </div>
        <div className="animation">
          <Icon icon="line-md:arrow-down" className="icon" width="2rem" height="2rem" />
        </div>
      </div>
    );
}

