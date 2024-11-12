import React from 'react';
import govLogo from '../imagens/govbr.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={govLogo} alt="Acesso à informação" />
        </div>
      </div>
      <div className="footer-categories">
        <div className="category">
          <h4>Categoria</h4>
          <ul>
            <li><a href="#">Texto de uma linha</a></li>
            <li><a href="#">Texto com quebra de linha</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h4>Redes Sociais</h4>
        <div className="social-icons">
          <i className="fab fa-facebook-f" aria-label="Facebook"></i>
          <i className="fab fa-twitter" aria-label="Twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
