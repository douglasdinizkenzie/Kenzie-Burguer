import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import {
  ButtonLoginForm,
  ToRegisterButton,
} from "../../Components/Buttons/styled";
import { CointainerForms } from "../../Components/CointainerForms/styled";
import { Forms } from "../../Components/Forms";
import { Logo } from "../../Components/Logo";
import { loginSchema } from "./loginSchema";
import { iFormLoginValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../Components/ErrorMenssage";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const formLoginSubmit: SubmitHandler<iFormLoginValues> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <CointainerForms>
      <Logo />
      <Forms onSubmit={handleSubmit(formLoginSubmit)}>
        <div className="container-form-header">
          <p>Login</p>
        </div>
        <TextField label="Email" variant="outlined" {...register("email")} />
        {errors.email?.message && (
          <ErrorMessage aria-label="error">{errors.email.message}</ErrorMessage>
        )}

        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          {...register("password")}
        />
        {errors.password?.message && (
          <ErrorMessage aria-label="error">
            {errors.password.message}
          </ErrorMessage>
        )}

        <ButtonLoginForm type="submit">Logar</ButtonLoginForm>
        <p className="sub-p">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </p>
        <ToRegisterButton to={"/register"}>Cadastre-se</ToRegisterButton>
      </Forms>
    </CointainerForms>
  );
}
