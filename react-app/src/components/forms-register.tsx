import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/button';
import { useUser, UserContextProps } from '@/context/formsContext';
import '@/components/css/forms.css';

// *Ver outras tasks em forms.tsx
// Refazer a logica de dias e meses para o registro
// Refazer a logica de idade para o registro
// 

export default function FormsRegister() {

    const {
        user,
         handleChanges,
          handleSubmit,
          isChecked,
           toggleCheckbox,
            isShowPassword,
             togglePassword,
            getDaysInmonth } = useUser() as UserContextProps;

    
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => i + 1922).reverse();


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Nome"
                    className="input"
                    name='name'
                    value={user.name}
                    onChange={(e) => handleChanges(e)}
                />
                <input
                    type="text"
                    placeholder="Sobrenome"
                    className="input"
                    name='lastName'
                    value={user.lastName}
                    onChange={(e) => handleChanges(e)}
                />
                <div className="selects">
                    <select name="day"
                     value={user.day}
                      onChange={(e) => handleChanges(e)}>
                        <option value="">Dia</option>
                        {Array.from({ length: getDaysInmonth(Number(user.month), Number(user.year)) }, (_, day) => day + 1).map((day) => (
                            <option key={day} value={day}>{day}</option>
                        ))}

                    </select>
                    <select name="month" value={user.month} onChange={(e) => handleChanges(e)}>
                        <option value="">Mês</option>
                        {months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <select name="year" value={user.year} onChange={(e) => handleChanges(e)}>
                        <option value="">Ano</option>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
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
                    />
                    <Icon 
                        icon={isShowPassword ? "mdi:eye-outline" : "mdi:eye-off-outline" }
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

                <Button name='Cadastrar' buttonSize='medium' textSize='medium' onClick={() => handleSubmit} />
            </form>
        </>
    )
}

