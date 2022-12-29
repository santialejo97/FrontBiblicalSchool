export interface RequestLogin {
  email: string;
  password: string;
}

export interface RequestRegister {
  nameUser: string;
  email: string;
  password: string;
}

export interface ResponseAuth {
  ok: boolean;
  user: User;
  token: string;
}

export interface User {
  nameUser: string;
  email: string;
  idUser: string;
  isActive: boolean;
  roleUser: string;
}

export interface ResponseValidToken {
  ok: boolean;
  newToken: string;
}
