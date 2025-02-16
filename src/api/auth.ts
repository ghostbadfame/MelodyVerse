import { LoginCredentials, SignupCredentials, AuthResponse } from '../types/auth';
import { api } from './axios';

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },
  signup: async (credentials: SignupCredentials) => {
    const response = await api.post<AuthResponse>('/auth/signup', credentials);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};
