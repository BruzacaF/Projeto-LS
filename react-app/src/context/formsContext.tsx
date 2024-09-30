import { createContext, useState, useContext, ChangeEvent, FormEvent } from 'react';
import { ReactNode } from 'react';
import utils from '../utils/validation'; // Importe as funções de validação para email e senha

// Define a interface User que representa um usuário
export interface User {
    name: string; // Nome do usuário
    lastName: string; // Sobrenome do usuário
    email: string; // Email do usuário
    password: string; // Senha do usuário
    age: number; // Idade do usuário
    terms: boolean; // Aceite dos termos
    day?: number; // Dia de nascimento
    month?: number; // Mês de nascimento
    year?: number; // Ano de nascimento
    date?: string; // Data formatada
}

// Define a interface UserContextProps que representa as propriedades do contexto do usuário
export interface UserContextProps {
    user: User; // Objeto do usuário
    setUser: React.Dispatch<React.SetStateAction<User>>; // Função para atualizar o usuário
    handleChanges: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; // Função para lidar com alterações em inputs
    handleSubmit: (e: FormEvent) => void; // Função para lidar com o envio do formulário
    isChecked: boolean; // Estado do checkbox
    toggleCheckbox: () => void; // Função para alternar o estado do checkbox
    isShowPassword: boolean; // Estado para mostrar/ocultar a senha
    togglePassword: () => void; // Função para alternar o estado de mostrar/ocultar a senha
    getDaysInmonth: (month: number, year: number) => number; // Função para obter o número de dias em um mês
    handleSelectDays: (e: ChangeEvent<HTMLSelectElement>) => void; // Função para lidar com a seleção de dias
    calculateAge: (day: number, month: number, year: number) => number; // Função para calcular a idade
    handleDate: (day: number, month: number, year: number) => void; // Função para lidar com a data
    whatDate: (day: number, month: number, year: number) => string; // Função para formatar a data
    isLoginBlock: boolean; // Estado para bloquear login
    toggleLoginBlock: () => void; // Função para alternar o estado de bloqueio do login
}

// Cria o contexto do usuário com um valor inicial indefinido
export const userContext = createContext<UserContextProps | undefined>(undefined);

// Define as propriedades do provedor de usuário
interface UserProviderProps {
    children: ReactNode; // Filhos que serão renderizados dentro do provedor
}

// Cria o provedor de usuário
export function UserProvider({ children }: UserProviderProps) {
    // Estado para controlar se o login está bloqueado
    const [isLoginBlock, setIsLoginBlock] = useState(true);

    // Função para alternar o estado de bloqueio do login
    const toggleLoginBlock = () => {
        setIsLoginBlock(!isLoginBlock);
    }

    // Estado para controlar o checkbox de termos
    const [isChecked, setIsCheck] = useState(false);
    // Função para alternar o estado do checkbox
    const toggleCheckbox = () => {
        setIsCheck(!isChecked);
    }

    // Estado para controlar a exibição da senha
    const [isShowPassword, setIsShowPassword] = useState(false);
    // Função para alternar o estado de mostrar/ocultar a senha
    const togglePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    // Estado inicial do usuário
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

    // Estado do usuário
    const [user, setUser] = useState<User>({ ...initialUserState });

    // Função para lidar com mudanças nos inputs do formulário
    const handleChanges = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement; // Obtém as propriedades do input
        // Atualiza o estado do usuário com base no input modificado
        setUser((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value // Se for checkbox, utiliza o valor de checked
        }));
    }

    // Função para lidar com o envio do formulário
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Valida o email usando a função de validação importada
        if (!utils.validateEmail(user.email)) {
            console.log("Email inválido"); // Mensagem de erro se o email for inválido
            return; // Sai da função se o email for inválido
        }

        // Valida a senha usando a função de validação importada
        if (!utils.validatePassword(user.password)) {
            console.log("Senha inválida"); // Mensagem de erro se a senha for inválida
            return; // Sai da função se a senha for inválida
        }

        // Calcula a idade e formata a data
        calculateAge(Number(user.day), Number(user.month), Number(user.year));
        whatDate(Number(user.day), Number(user.month), Number(user.year));

        console.log('Form data:', user); // Exibe os dados do formulário no console
    }

    // Função para obter o número de dias em um determinado mês e ano
    const getDaysInmonth = (month: number, year: number) => {
        return new Date(year, month, 0).getDate(); // Retorna o número de dias
    }

    // Função para lidar com a seleção de dias
    const handleSelectDays = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name } = e.target; // Obtém o nome do input
        handleChanges(e); // Chama a função de mudanças para atualizar o estado

        // Se o mês ou ano foi alterado, verifica se o dia é válido
        if (name === 'month' || name === 'year') {
            const daysInMonth = getDaysInmonth(Number(user.month), Number(user.year)); // Obtém o número de dias do mês
            if (Number(user.day) > daysInMonth) { // Se o dia for maior que o número de dias no mês
                // Atualiza o dia para o último dia do mês
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

    // Função para calcular a idade com base na data de nascimento
    const calculateAge = (day: number, month: number, year: number) => {
        const today = new Date(); // Obtém a data atual
        const birthDate = new Date(year, month, day); // Cria uma data com base no nascimento
        let age = today.getFullYear() - birthDate.getFullYear(); // Calcula a idade

        // Verifica se já fez aniversário este ano
        const monthToday = today.getMonth(); // Mês atual
        const monthBirth = birthDate.getMonth(); // Mês de nascimento
        if (monthToday < monthBirth || (monthToday === monthBirth && today.getDate() < birthDate.getDate())) {
            age--; // Decrementa a idade se ainda não fez aniversário
        }
        return age; // Retorna a idade
    }

    // Função para lidar com a data de nascimento e atualizar a idade no estado do usuário
    const handleDate = (day: number, month: number, year: number) => {
        setUser((prevData) => ({
            ...prevData,
            age: calculateAge(day, month, year) // Atualiza a idade
        }));
    }

    // Função para formatar a data em uma string legível
    const whatDate = (day: number, month: number, year: number) => {
        const date = new Date(year, month, day); // Cria um objeto de data
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }; // Opções de formatação
        return date.toLocaleDateString('pt-BR', options); // Retorna a data formatada
    }

    // Retorna o contexto do usuário para os componentes filhos
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
            {children} {/* Renderiza os filhos dentro do provedor */}
        </userContext.Provider>
    )
}

// Hook para usar o contexto do usuário em outros componentes
export const useUser = (): UserContextProps => {
    const context = useContext(userContext); // Obtém o contexto
    if (!context) {
        throw new Error("useUser deve ser usado dentro de um UserProvider"); // Lança erro se o contexto não estiver disponível
    }
    return context; // Retorna o contexto
}
