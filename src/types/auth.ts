export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface SignupCredentials extends LoginCredentials {
    username?: string;
  }
  
  export interface AuthResponse {
    data: any;
    accessToken: string;
    user: {
      data: any;
      username: string;
      id: string;
      email: string;
    };
  }

  
  
  export interface User {
    email: string;
    username?: string;
    id: string;
  }

  export interface UserAuthContextType {
    user: User | null;
    logIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
  }