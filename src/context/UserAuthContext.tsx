import React, { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../api/auth";
import { LoginCredentials, SignupCredentials } from "../types/auth";

interface User {
  email: string;
  username: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  logOut: () => void;
}

const userAuthContext = createContext<AuthContextType | undefined>(undefined);

export function UserAuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Log in a user
  const logIn = async (email: string, password: string) => {
    try {
      const credentials: LoginCredentials = { email, password };
      const response = await authApi.login(credentials);
      const userData = {
        email: response.data.user.email,
        username: response.data.user.username,
        token: response.data.accessToken
      };
      setUser(userData);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  };

  // Sign up a user
  const signUp = async (email: string, password: string, username: string) => {
    try {
      const credentials: SignupCredentials = { email, password, username };
      const response = await authApi.signup(credentials);
      const userData = {
        email: response.data.user.email,
        username: response.data.user.username,
        token: response.data.accessToken
      };
      setUser(userData);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error("Sign up failed", error);
      throw error;
    }
  };

  // Log out a user
  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    authApi.logout();
  };

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
      if (storedUser && storedToken) {
        const userData = JSON.parse(storedUser);
        if (userData.email && userData.username && userData.token) {
          setUser(userData);
        } else {
          // Invalid user data structure, clear storage
          localStorage.removeItem('user');
          localStorage.removeItem('token');
        }
      }
    } catch (error) {
      // Invalid JSON in localStorage, clear it
      console.error('Error parsing stored user data:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(userAuthContext);
  if (context === undefined) {
    throw new Error("useUserAuth must be used within a UserAuthContextProvider");
  }
  return context;
}
