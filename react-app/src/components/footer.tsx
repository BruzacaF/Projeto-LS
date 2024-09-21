'use client';


import Link from "next/link"
import '@/components/css/footer.css';
import linksToReferences from "@/components/assets/references";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';



// Organizar o footer para que fique mais limpo e organizado
// Organizar o css do footer
// Criar um arquivo assets com as imagens e icones do footer (opcional)
// Criar um arquivo de contexto para o footer (opcional)

export default function Footer() {

    const list = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Increased interval for smoother animation
                duration: 0.8, // Increased duration for smoother transition
            },
        },
    };

    const listItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8, // Increased duration for smoother transition
            },
        },
    };

    const items = linksToReferences.references.map((reference, index) => (
        <motion.li key={index} variants={listItem}>
            <Link href={reference.link}>
                {reference.title}
            </Link>
        </motion.li>
    ));

    const socialItems = linksToReferences.social.map((reference, index) => (
        <motion.li key={index} variants={listItem}>
            <Link href={reference.link}>
                <Icon className="icons-brand" icon={reference.icon} style={{ width: '16px', height: '16px' }} />
            </Link>
        </motion.li>
    ));


    const politicsItems = linksToReferences.politics.map((reference, index) => (
        <motion.li key={index} variants={listItem}>
            <Link href={reference.link}>
                {reference.title}
            </Link>
        </motion.li>
    ));
    




    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="link-area">
                    <p>Icones e ilustrações</p>
                        <motion.ul variants={list} initial="hidden" animate="visible">
                            {items}
                        </motion.ul>
                </div>
                <div className="contato-area">
                    <p>Politicas</p>
                    <motion.ul variants={list} initial="hidden" animate="visible">
                        {politicsItems}
                    </motion.ul>
                </div>
                <div className="social-area">
                    <p>Nos acompanhe nas redes sociais</p>
                    <motion.ul variants={list} initial="hidden" animate="visible">
                        {socialItems}
                    </motion.ul>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 Letra a Letra. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
