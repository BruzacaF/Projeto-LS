// Validação de email
function validateEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
  
// Validação de senha (mínimo 8 caracteres, incluindo ao menos 1 letra maiúscula, 1 número e 1 caractere especial)
function validatePassword(senha: string): boolean {
    const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    return regexSenha.test(senha);
}

// Validação de idade (verifica se a idade é maior que zero)
function validateAge(idade: number): boolean {
    return idade > 0;
}

// Exportação padrão de todas as funções juntas
export default {
    validateEmail,
    validatePassword,
    validateAge
};