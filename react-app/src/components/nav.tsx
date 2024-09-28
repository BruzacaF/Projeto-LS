
import Button from "./button";
import '@/components/css/header.css';
import { links } from "@/components/assets/header-nav/references-links";


// Organinizar o css do nav
// Organizar o mapeamento dos links ver nota em header.tsx


export default function Nav() {

    return (
        <>
        <nav className="nav">
            {links.map((link, index) => (
                <Button
                    key={index}
                    name={link.name}
                    href={link.href}
                    buttonSize="small"
                    textSize="small"
                />
            ))}
        </nav>
        </>
    );
}

