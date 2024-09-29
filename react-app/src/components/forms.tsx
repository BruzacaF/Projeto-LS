
import { motion } from 'framer-motion';

import { Icon } from '@iconify/react';
import '@/components/css/forms.css';
import Button from '@/components/button';
import { useUser, UserContextProps } from '@/context/formsContext';




// Colocar Restrições de senha e email 
// Colocar validação de email
// Colocar validação de senha
// Colocar validação de idade
// Implementar a função de login
// Implementar a função de registro
// Implementar a função de logout
// Implementar a função de esqueci a senha


// Implementar a função de bloquear o botao de login e registro 
// enquanto o usuario não aceitar os termos ou senha e email não estiverem validos* 




export default function Forms() {

    const { user,
         handleChanges,
          handleSubmit, 
          isChecked, 
          toggleCheckbox, 
          isShowPassword, 
          togglePassword,
            // isLoginBlock,
            // toggleLoginBlock 
            } = useUser() as UserContextProps;


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    className="input"
                    name='email'
                    value={user.email}
                    onChange={(e) => handleChanges(e)}
                /> 
                
                <div style={{ position: 'relative' }}>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Password"
                        className="input"
                        value={user.password} 
                        name='password'
                        onChange={(e) => handleChanges(e)}
                        {...(isShowPassword && { autoComplete: 'off' })}
                    />
                    <Icon 
                        icon={isShowPassword ? "mdi:eye-off-outline" : "mdi:eye-outline" }
                        onClick={togglePassword}
                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Caixa de seleção personalizada com animação */}
                    <motion.div
                        onClick={toggleCheckbox}
                        className="checkbox"
                        initial={false} // Para evitar animação na montagem
                        animate={{ backgroundColor: isChecked ? '#FF6600' : '#fff' }} // Animação de fundo
                        transition={{ duration: 0.3 }}
                    >
                        {/* Ícone de checkmark animado */}
                        {isChecked && (
                            <motion.div
                                initial={{ scale: 0 }} // Ícone começa invisível
                                animate={{ scale: 1 }} // Ícone aparece ao marcar
                                transition={{ type: 'spring', stiffness: 300 }}
                                className='checkmark'
                            >
                                <Icon icon="line-md:check-all" width="26px" height="26px" />
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Label para checkbox */}
                    <label onClick={toggleCheckbox} style={{ cursor: 'pointer', userSelect: 'none' }}>
                        Aceito os termos e condições
                    </label>
                </div>


                <Button buttonSize='medium' textSize='medium' href='/dashboard' name='Entrar'/>
                    
            </form>
        </>
    )
}

