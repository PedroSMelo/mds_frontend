import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../api/userApi';
import './Painel.css';


const Painel = () => {
  const [users, setUsers] = useState([]);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!localStorage.getItem('auth')) {
      navigate('/login'); 
    } else {
      const loadUsers = async () => {
        try {
          const data = await fetchUsers();
          setUsers(data);
        } catch (error) {
          setErro(error.message);
        }
      };

      loadUsers();
    }
  }, [navigate]);

  return (
    <div className="painel-container">
      <h2>Painel de Controle</h2>
      {erro && <div className="error">{erro}</div>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>E-mail</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.dt_nascimento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Painel;
