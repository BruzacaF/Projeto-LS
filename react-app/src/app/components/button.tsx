import styled from "styled-components";
import '@/app/components/css/button.css';



interface ButtonProps {
    buttonSize: string;
    textSize: string;
    name: string;
    onClick?: () => void;
}

export default function Button (props: ButtonProps) {

    const convertToClassName = (size: string, text: string) => {


        const toClassName = `button ${size} text-size-${text}`;
        return toClassName;
    }

    const className = convertToClassName(props.buttonSize || "medium", props.textSize || "medium");

    return (
        <>
        <button className={className} onClick={props.onClick}>{props.name}</button>
        </>
    );
}