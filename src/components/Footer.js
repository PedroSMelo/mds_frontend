import React from 'react';

const Footer = () => {
  return (
    <footer className="br-footer">
      <div className="container-lg">
        <div className="logo">
          <img
            src="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-negative.png"
            alt="Imagem"
          />
        </div>
        <div className="br-list horizontal" data-toggle="data-toggle" data-sub="data-sub">
          {['Categoria 1'].map((category, index) => (
            <div className="col-2" key={index}>
              <a className="br-item header" href="javascript:void(0)">
                <div className="content text-down-01 text-bold text-uppercase">{category}</div>
                <div className="support">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </div>
              </a>
              <div className="br-list">
                <span className="br-divider d-md-none"></span>
                {['Est ex deserunt', 'Qui esse', 'Nulla occaecat eiusmod'].map((item, index) => (
                  <a className="br-item" href="javascript:void(0)" key={index}>
                    <div className="content">{item}</div>
                  </a>
                ))}
                <span className="br-divider d-md-none"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="d-none d-sm-block">
          <div className="row align-items-end justify-content-between py-5">
            <div className="col">
              <div className="social-network">
                <div className="social-network-title">Redes Sociais</div>
                <div className="d-flex">
                  {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((social, index) => (
                    <a
                      className="br-button circle"
                      href="javascript:void(0)"
                      aria-label={`Compartilhar por ${social.charAt(0).toUpperCase() + social.slice(1)}`}
                      key={index}
                    >
                      <i className={`fab fa-${social}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="br-divider my-3"></span>
      <div className="container-lg">
        <div className="info">
          <div className="text-down-01 text-medium pb-3">
            Texto destinado a exibição de informações relacionadas à <strong>licença de uso.</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
