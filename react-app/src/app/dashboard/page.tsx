'use client'

import MainDash from "@/components/dashboard/Main-dashboard"
import '@/components/css/dashboard.css'
import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"



export default function MainDashboard() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Se a sessão for null, significa que o usuário não está autenticado
        if (!session) {
            router.push('/login');
        }
    }, [session, router]);

    if (session === undefined) {
        return <div>Carregando...</div>;  // Carregar enquanto a sessão está sendo verificada
    }



    return (
        <>
            <h1>Bem-Vindo ao Dashboard, {session?.user?.name}</h1>
            <button onClick={() => signOut()}>Sair</button>
            <MainDash />
        </>

    )
}
