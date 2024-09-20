import styled from "styled-components";
import '@/components/css/button.css';
import { motion } from "framer-motion";
import Link from "next/link";



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

    return (
        <>
            <motion.button
                className={className}
                onClick={props.onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                {props.href ? (
                    <Link href={props.href} className="links">
                        {props.name}
                    </Link>
                ) : (
                    <span>{props.name}</span>
                )}


            </motion.button>
        </>
    );
}