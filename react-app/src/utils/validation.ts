/**
 * Valida se o email fornecido segue o formato padrão com caracteres antes e depois de "@" e um domínio válido.
 *
 * @param {string} email - O endereço de email a ser validado.
 * @returns {boolean} Retorna `true` se o email for válido, caso contrário, `false`.
 */
function validateEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
  
/**
 * Valida se a senha possui ao menos 8 caracteres, contendo pelo menos uma letra maiúscula, um número e um caractere especial.
 *
 * @param {string} senha - A senha a ser validada.
 * @returns {boolean} Retorna `true` se a senha for válida, caso contrário, `false`.
 */
function validatePassword(senha: string): boolean {
    const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    return regexSenha.test(senha);
}

/**
 * Verifica se a idade fornecida é maior que zero.
 *
 * @param {number} idade - A idade a ser validada.
 * @returns {boolean} Retorna `true` se a idade for maior que 0, caso contrário, `false`.
 */
function validateAge(idade: number): boolean {
    return idade > 0;
}


export default {
    validateEmail,
    validatePassword,
    validateAge
};
