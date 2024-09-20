import { p } from 'framer-motion/client';
import {createContext, useState, useContext} from 'react';
import { ReactNode } from 'react';


export const userContext = createContext({});


interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({children}: UserProviderProps) {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChanges = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <userContext.Provider value={{user, handleChanges, handleSubmit}}>
            {children}
        </userContext.Provider>
    )

  
}

export function useUser() {
    const context = useContext(userContext);
    return context;
}
