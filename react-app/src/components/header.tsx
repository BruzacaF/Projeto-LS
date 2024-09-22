'use client';

import { Saira_Stencil_One } from "next/font/google";
import Nav from "./nav";
import themeThoggle from "@/components/theme-change";
import Link from "next/link";
import { motion } from "framer-motion";

import '@/components/css/button.css';

// Organizar o header para que fique mais limpo e organizado
// Organizar o css do header
// Criar um arquivo linksReferences.tsx para organizar os links do header







const sairaStencial = Saira_Stencil_One({
    subsets: ["latin"],
    weight: ['400'],

})


const whileTap = {
    scale: 0.9,
    transition: {
        duration: 0.1
    },
}

const whileHover = {
    scale: 1.05,
    transition: {
        duration: 0.1
    },
}

export default function Header() {

    return (
        <>
            <header className="header">

                <div className="header-content">

                    <motion.div
                        className="logo"
                        whileTap={whileTap}
                        whileHover={whileHover}
                    >
                        <Link href="/" >
                            <h1 className={`${sairaStencial.className} logo-text`} >Letra a Letra</h1>
                        </Link>
                    </motion.div>

                    {themeThoggle()}

                    <Nav />


                </div>

            </header>
        </>
    );
}

