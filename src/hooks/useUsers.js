// src/hooks/useUsers.js
import { useUserContext } from '../context/UserContext';

export const useUsers = () => {
  const { users, loading, error } = useUserContext();
  return { users, loading, error };
};
