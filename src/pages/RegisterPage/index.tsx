import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonRegisterForm } from "../../Components/Buttons/styled";
import { CointainerForms } from "../../Components/CointainerForms/styled";
import { Forms } from "../../Components/Forms";
import { Logo } from "../../Components/Logo";
import { BackToLogin } from "./styled";
import { iFormRegisterValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerSchema";
import { ErrorMessage } from "../../Components/ErrorMenssage";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function RegisterPage() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterValues>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const formRegisterSubmit: SubmitHandler<iFormRegisterValues> = (data) => {
    const { confirmPassword, ...rest } = data;
    registerUser(rest);
  };

  return (
    <CointainerForms>
      <Logo />
      <Forms onSubmit={handleSubmit(formRegisterSubmit)}>
        <div className="container-form-header">
          <p>Cadastro</p>
          <BackToLogin to={"/"}>Voltar para o login</BackToLogin>
        </div>
        <TextField label="Nome" variant="outlined" {...register("name")} />
        {errors.name?.message && (
          <ErrorMessage aria-label="error">{errors.name.message}</ErrorMessage>
        )}
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
        <TextField
          label="Confirmar senha"
          variant="outlined"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <ErrorMessage aria-label="error">
            {errors.confirmPassword.message}
          </ErrorMessage>
        )}
        <ButtonRegisterForm type="submit">Cadastrar</ButtonRegisterForm>
      </Forms>
    </CointainerForms>
  );
}
