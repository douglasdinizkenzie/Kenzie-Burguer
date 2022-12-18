import React from "react";

export interface iUserContextProviderValues {
  registerUser: (user: iUserRegister) => void;
  loginUser: (user: iUserLogin) => void;
  loading: boolean;
  isUserAuth: boolean;
  logOut: () => void;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserRegister {
  email: string;
  name: string;
  password: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}

// export interface iUserState {
//   accessToken: string;
//   user: {
//     email: string;
//     id: number;
//     name: string;
//   };
// }
