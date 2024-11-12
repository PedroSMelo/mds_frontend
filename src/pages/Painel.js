import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api/userApi';

const Painel = () => {
  const [users, setUsers] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setErro(error.message);
      }
    };

    loadUsers();
  }, []); 

  return (
    <div>
      <h2>Painel de Controle</h2>
      {erro && <div className="error">{erro}</div>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
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
  );
};

export default Painel;
