
import { createContext, useState, useContext, ChangeEvent, FormEvent } from 'react';
import { ReactNode } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';







// Reorganizar o código para que fique mais limpo e organizado
// Reformular a interface de props do Usuario
// Reformular a interface de contexto do Usuario
// Reformular a interface de contexto do UsuarioProvider
// Reformular Css do Formulário(Media Queries) => Ilustração Muito grande em telas pequenas






export interface User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    terms: boolean;
    day?: number;
    month?: number;
    year?: number;
    date?: string;


}

export interface UserContextProps {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    handleChanges: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: FormEvent) => void;
    isChecked: boolean;
    toggleCheckbox: () => void;
    isShowPassword: boolean;
    togglePassword: () => void;
    getDaysInmonth: (month: number, year: number) => number;
    handleSelectDays: (e: any) => void;
    calculateAge: (day: number, month: number, year: number) => number;
    handleDate: (day: number, month: number, year: number) => void;
    whatDate: (day: number, month: number, year: number) => string;
    isLoginBlock: boolean;
    toggleLoginBlock: () => void;




}

export const userContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}


export function UserProvider({ children }: UserProviderProps) {

    const router = useRouter();


    const[isLoginBlock, setIsLoginBlock] = useState(true);

    const toggleLoginBlock = () => {
        setIsLoginBlock(!isLoginBlock);
    }



    const [isChecked, setIsCheck] = useState(false);
    const toggleCheckbox = () => {
        setIsCheck(!isChecked);
    }

    const [isShowPassword, setIsShowPassword] = useState(false);
    const togglePassword = () => {
        setIsShowPassword(!isShowPassword);
    }


    const initialUserState: User = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        age: 0,
        terms: false,
        day: undefined,
        month: undefined,
        year: undefined
    };

    const [user, setUser] = useState<User>({ ...initialUserState });

       

    const handleChanges = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setUser((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value

        }));

    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            email: user.email,
            password: user.password
        });

        if (result?.error) {
            console.log('Erro no login', result.error);
        } else {
            console.log('Usuário logado com sucesso', result);
            router.push('/mainPage');
        }

        setUser({ ...initialUserState });
        
    }


    const getDaysInmonth = (month: number, year: number) => {
        return new Date(year, month, 0).getDate();
    }

    const handleSelectDays = (e: any) => {
        const { name, value } = e.target;
        handleChanges(e);
        if (name === 'month' || name === 'year') {
            const daysInMonth = getDaysInmonth(Number(user.month), Number(user.year));
            if (Number(user.day) > daysInMonth) {
                handleChanges({
                    target: {
                        name: 'day',
                        value: daysInMonth.toString(),
                        type: 'text',
                        checked: false
                    } as EventTarget & HTMLInputElement
                } as ChangeEvent<HTMLInputElement>);
            }
        }
    }


    const calculateAge = (day: number, month: number, year: number) => {
        const today = new Date();
        const birthDate = new Date(year, month, day);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthToday = today.getMonth();
        const monthBirth = birthDate.getMonth();
        if (monthToday < monthBirth || (monthToday === monthBirth && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const handleDate = (day: number, month: number, year: number) => {
        setUser((prevData) => ({
            ...prevData,
            age: calculateAge(day, month, year)
        }));
    }

    const whatDate = (day: number, month: number, year: number) => {
        const date = new Date(year, month, day);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
    }




    return (
        <userContext.Provider value={{
            user,
            setUser,
            handleChanges,
            handleSubmit,
            isChecked,
            toggleCheckbox,
            isShowPassword,
            togglePassword,
            getDaysInmonth,
            handleSelectDays,
            calculateAge,
            handleDate,
            whatDate,
            isLoginBlock,
            toggleLoginBlock


        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = (): UserContextProps => {
    const context = useContext(userContext);
    if (context === undefined) {
        throw new Error('useUser must be used within an UserProvider');
    }
    return context;
}


















// ================================================================================================================================
// const [isChecked, setIsCheck] = useState(false);

//     const toggleCheckbox = () => {
//         setIsCheck(!isChecked);
//     }
//     const [isShowPassword, setIsShowPassword] = useState(false);
//     const togglePassword = () => {
//         setIsShowPassword(!isShowPassword);
//     }



//     const [user, setUser] = useState<User>({
//         email: "",
//         password: "",
//         age: 0,
//         terms: false,
//     });

//     const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value, type, checked } = e.target;
//         setUser((prevData) => ({
//             ...user,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     }

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         console.log('Dados do formulário', user);

//     }
