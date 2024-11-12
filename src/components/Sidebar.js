import React from 'react';
import './Sidebar.css';

const menuList = [
  {
    id: 1,
    icon: 'bell',
    name: 'Registrar',
    url: '/Registro',
  },
  {
    id: 2,
    icon: 'tachometer-alt',
    name: 'Painel',
    url: '/Painel',
  },
  {
    id: 3,
    icon: 'sign-in-alt',
    name: 'Login',
    url: '/login',
  },
];

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <a
        href={item.url || 'javascript:void(0)'}
        className="menu-item"
        onClick={item.list ? toggleSubMenu : undefined}
      >
        <i className={`fas fa-${item.icon}`}></i> {item.name}
      </a>
      {item.list && isOpen && (
        <div className="submenu">
          {item.list.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => (
  <div className="app-container">
    <div id="main-navigation">
      <div className="menu">
        {menuList.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
    <div className="main-content">
      {/* Conteúdo principal da página */}
    </div>
  </div>
);

export default Sidebar;
