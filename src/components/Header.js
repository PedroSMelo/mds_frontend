import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ density = 'small' }) => {
  return (
    <header className={`br-header ${density}`}>
      <div className="container-lg">
        <div className="header-top">
          <div className="header-logo">
            <img alt="Logo" />
            <span className="br-divider vertical"></span>
            <div className="header-sign">Assinatura</div>
          </div>
          <div className="header-actions">
            <div className="header-links dropdown">
              <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido">
                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Acesso Rápido</div>
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <a key={i} className="br-item" href="javascript:void(0)">
                    Link de acesso {i}
                  </a>
                ))}
              </div>
            </div>
            <span className="br-divider vertical mx-half mx-sm-1"></span>
            <div className="header-functions dropdown">
              <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema">
                <i className="fas fa-th" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Funcionalidades do Sistema</div>
                </div>
                {['chart-bar', 'headset', 'comment', 'adjust'].map((icon, i) => (
                  <div key={i} className="br-item">
                    <button className="br-button circle small" type="button" aria-label={`Funcionalidade ${i + 1}`}>
                      <i className={`fas fa-${icon}`} aria-hidden="true"></i>
                      <span className="text">Funcionalidade {i + 1}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
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
              <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id={`menu-${density}`}>
                <i className="fas fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div className="header-info">
              <div className="header-title">{`Header Densidade ${density === 'small' ? 'Alta' : 'Baixa'}`}</div>
              <div className="header-subtitle">Subtítulo do Header</div>
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
