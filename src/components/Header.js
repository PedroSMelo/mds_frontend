import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import govLogo from '../imagens/govbr.png';

const Header = ({ density = 'small' }) => {
  const [showButtons, setShowButtons] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleButtonsVisibility = () => {
    setShowButtons(!showButtons);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');  
    navigate('/login');  
  };

  const getTitle = () => {
    switch (location.pathname) {
      case '/login':
        return `Login`;
      case '/registro':
        return 'Registro';
      case '/painel':
        return 'Painel';
      default:
        return 'Bem-vindo ao Govbr';
    }
  };

  return (
    <header className={`br-header ${density}`}>
      <div className="container-lg">
        <div className="header-top">
          <div className="header-logo">
            <img src={govLogo} alt="Logo" />
            <span className="br-divider vertical"></span>
          </div>
          <div className="header-actions">
            <div className="header-links dropdown">
              <button 
                className="br-button circle small" 
                type="button" 
                data-toggle="dropdown" 
                aria-label="Abrir Acesso Rápido"
                onClick={toggleButtonsVisibility} 
              >
                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
            </div>

              <div className="header-functions">
                <a href="/login">
                  <button className="br-button small" type="button">Login</button>
                </a>
                <a href="/registro">
                  <button className="br-button small" type="button">Registrar</button>
                </a>
                <a href="/painel">
                  <button className="br-button small" type="button">Painel</button>
                </a>
                <button className="br-button small" type="button" onClick={handleLogout}>
                  Sair
                </button>
              </div>

            <span className="br-divider vertical mx-half mx-sm-1"></span>

            <div className="header-search-trigger">
              <button className="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search">
                <i className="fas fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div className="header-login">
              <div className="header-sign-in">
                <button className="br-sign-in small" type="button" data-trigger="login">
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <span className="d-sm-inline">Entrar</span>
                </button>
              </div>
              <div className="header-avatar"></div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-menu">
            <div className="header-menu-trigger">
              <button 
                className="br-button small circle" 
                type="button" 
                aria-label="Menu" 
                data-toggle="menu" 
                data-target="#main-navigation" 
                id={`menu-${density}`}
              >
                <i className="fas fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div className="header-info">
              <div className="header-title">{getTitle()}</div>
            </div>
          </div>
          <div className="header-search">
            <div className="br-input has-icon">
              <label htmlFor={`searchbox-${density}`}>Texto da pesquisa</label>
              <input id={`searchbox-${density}`} type="text" placeholder="O que você procura?" />
              <button className="br-button circle small" type="button" aria-label="Pesquisar">
                <i className="fas fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <button className="br-button circle search-close ml-1" type="button" aria-label="Fechar Busca" data-dismiss="search">
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
