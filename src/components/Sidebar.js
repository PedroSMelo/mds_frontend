import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="govbr-sidebar">
      <nav>
        <ul>
          <li><Link to="/">Acesso</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/painel">Painel</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
