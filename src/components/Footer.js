import React from 'react';

const Footer = ({ text, logo, categories, social, partners }) => (
  <footer className="footer">
    {/* Logo */}
    <div className="footer-logo">
      <img src={logo.url} alt={logo.description} />
    </div>

    {/* Texto de licença */}
    <p>{text}</p>

    {/* Categorias */}
    <div className="footer-categories">
      {categories.map((category, index) => (
        <div key={index} className="footer-category">
          <h4>{category.title}</h4>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Redes sociais */}
    <div className="footer-social">
      <h4>{social.label}</h4>
      <div className="footer-social-icons">
        {social.networks.map((network, idx) => (
          <a key={idx} href={network.href || '#'} title={network.description}>
            {network.image ? (
              <img src={network.image} alt={network.description} />
            ) : (
              <i className={`${network.iconFamily} fa-${network.icon}`}></i>
            )}
          </a>
        ))}
      </div>
    </div>

    {/* Parceiros */}
    <div className="footer-partners">
      {partners.map((partner, index) => (
        <a key={index} href={partner.href} title={partner.description}>
          <img src={partner.image} alt={partner.description} />
        </a>
      ))}
    </div>
  </footer>
);

// Dados de exemplo para o Footer
const footerData = {
  text: "Todo o conteúdo deste site está publicado sob a licença Creative Commons",
  logo: {
    url: 'https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-negative.png',
    description: 'Acesso à informação',
  },
  categories: [
    {
      title: 'Categoria',
      items: [
        { title: 'Texto de uma linha', href: '#' },
        { title: 'Texto com quebra de linha', href: '#' },
      ],
    },
    // Repita outras categorias conforme necessário
  ],
  social: {
    label: 'Redes Sociais',
    networks: [
      {
        icon: 'facebook-f',
        iconFamily: 'fab',
        description: 'Facebook',
      },
      {
        icon: 'twitter',
        iconFamily: 'fab',
        description: 'Twitter',
      },
      {
        href: '#',
        image: 'https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/button-negative.png',
        description: 'Rede social',
      },
    ],
  },
  partners: [
    {
      href: '#',
      image: 'https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png',
      description: 'Parceiro',
    },
  ],
};

const App = () => (
  <div>
    <Footer
      text={footerData.text}
      logo={footerData.logo}
      categories={footerData.categories}
      social={footerData.social}
      partners={footerData.partners}
    />
  </div>
);

export default App;
