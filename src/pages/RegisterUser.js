import React, { useState } from 'react';
import { registerUser } from '../api/userApi';
import './RegisterUser.css';


const RegisterUser = () => {
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');
  
    const handleRegister = async () => {
      const userData = { email, dataNascimento, senha };
      try {
        const data = await registerUser(userData);
        setSucesso("Usuário registrado com sucesso!");
      } catch (error) {
        setErro(error.message);
      }
    };
  
    return (
      <div className="register-container">
        <h2>Registrar</h2>
  
        {erro && <div className="error">{erro}</div>}
        {sucesso && <div className="success">{sucesso}</div>}
  
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="input-field"
        />
        <input 
          type="date" 
          placeholder="Data de Nascimento" 
          value={dataNascimento} 
          onChange={(e) => setDataNascimento(e.target.value)} 
          className="input-field"
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          className="input-field"
        />
        
        <button onClick={handleRegister} className="submit-button">Registrar</button>
      </div>
    );
  };
  

export default RegisterUser;
