import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginUser.css';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsLoggedIn(true); 
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login realizado com:', email, senha);

    localStorage.setItem('auth', 'true'); 
    setIsLoggedIn(true); 
    navigate('/painel'); 
  };

 

  return (
    <div className="login-container">
      <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Acessar</button>
        </form>
      
    </div>
  );
};

export default LoginUser;
