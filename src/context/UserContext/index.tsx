import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import {
  iUserRegister,
  iUserContextProviderValues,
  iUserLogin,
  iUserProviderProps,
} from "./types";

export const UserContext = createContext({} as iUserContextProviderValues);

export function UserProvider({ children }: iUserProviderProps) {
  const navigate = useNavigate();
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    setIsUserAuth(true);
    setLoading(false);
  }, []);

  async function registerUser(user: iUserRegister) {
    try {
      await api.post("/users", user);
      toast.success("Registrado!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Esse Email já existe!");
    }
  }

  async function loginUser(user: iUserLogin) {
    try {
      const response = await api.post("/login", user);
      toast.success("Seja bem vindo!");
      localStorage.setItem("@TOKEN", response.data.accessToken);
      setIsUserAuth(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos");
    }
  }

  function logOut() {
    localStorage.removeItem("@TOKEN");
    setIsUserAuth(false);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{ registerUser, loginUser, isUserAuth, loading, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
}
