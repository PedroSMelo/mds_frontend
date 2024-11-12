import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/listagem-usuarios`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw new Error("Erro ao carregar a lista de usuários.");
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/registrar`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new Error("Erro ao registrar usuário.");
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/acessar`, credentials);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw new Error("Credenciais inválidas.");
  }
};
