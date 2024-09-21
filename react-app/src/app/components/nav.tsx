import styled from "styled-components";
import Button from "./button";
import '@/app/components/css/header.css'


export default function Nav() {
    
    const links = ["Sobre", "Ajuda", "Regras", "Contato"];

    return (
        <>
        <nav className="nav">
            {links.map((link, index) => {
                return <Button key={index} name={link} buttonSize="small" textSize="small" />
            })}
        </nav>
        
        </>
    );
}

