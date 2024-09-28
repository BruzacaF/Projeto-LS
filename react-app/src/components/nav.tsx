
import Button from "./button";
import '@/components/css/header.css';

// Organinizar o css do nav
// Organizar o mapeamento dos links ver nota em header.tsx


export default function Nav() {
    
    const links = ["Sobre", "Ajuda", "Regras", "Ranking"];

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

