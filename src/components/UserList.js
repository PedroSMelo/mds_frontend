import React from 'react';
import { useUsers } from '../hooks/useUsers';
import './UserList.css';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Email:</strong> {user.email} <br />
            <strong>Data de Nascimento:</strong> {user.dt_nascimento}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
