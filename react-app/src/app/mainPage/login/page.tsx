'use client';

import Forms from "@/components/forms";
import FormsRegister from "@/components/forms-register";
import '@/components/css/forms.css';
import NotebookIcon from '@/assets/icons/notebook-not-css.svg';
import { UserProvider } from "@/context/formsContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";



// Mover o toggleLogin e sua lógica para o context
// Mover o isLogin para o context
// Verificar se é possível mover o useEffect para o context
// Organizar o css do login page
// Organizar o login page para que fique mais limpo e organizado










export default function LoginPage() {

     const router = useRouter();

    const[isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }

    return (
        <UserProvider>
            <div className="forms-page">

                <div className="forms-left">
                    <h1 className="title">{isLogin ? 'Bem vindo de volta' : 'Hora do cadastro'} </h1>
                    <p className="subtitle">{isLogin ? 'Entre já com sua conta' : 'Cadastre-se agora'}</p>

                    <motion.div
                        key={isLogin ? 'login' : 'register'}
                        initial={{ opacity: 0, x: isLogin ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isLogin ? 100 : -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        {isLogin ? <Forms /> : <FormsRegister />}
                    </motion.div>
                    <p>Ainda não tem uma conta? <span onClick={toggleLogin} style={{color: 'var(--color-primary)'}}>Crie aqui</span></p>

                </div>

                <div className="forms-right">
                    <div className="ilustration">
                        <NotebookIcon />
                    </div>
                </div>

            </div>
        </UserProvider>
    );
}

