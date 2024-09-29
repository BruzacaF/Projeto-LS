
import '@/components/css/button.css';
import { motion } from "framer-motion";
import Link from "next/link";






// Refatorar o componente button para que fique mais limpo e organizado
// Organizar o css do button
// Organizar o componente button

interface ButtonProps {
    buttonSize: string;
    textSize: string;
    name: string;
    onClick?: () => void;
    href?: string;
}

export default function Button(props: ButtonProps) {

    const convertToClassName = (size: string, text: string) => {
        const toClassName = `button ${size} text-size-${text}`;
        return toClassName;
    }

    const className = convertToClassName(props.buttonSize || "medium", props.textSize || "medium");

    const buttonElement = (
        <motion.button
            className={className}
            onClick={props.onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ 
                willChange: 'transform', 
                backfaceVisibility: 'hidden', 
                transform: 'translateZ(0)' 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {props.name}
        </motion.button>
    );

    return props.href ? (
        <Link href={props.href} passHref>
            {buttonElement}
        </Link>
    ) : (
        buttonElement
    );
}