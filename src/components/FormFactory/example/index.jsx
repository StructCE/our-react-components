// A proposta deste exemplo é uma página de cadastro e login de usuário
//  Você tem a opção de registrar um novo usuário e, caso já tenha registrado algum, você
//  pode ir para a página de login e logar com os devidos email e senha do usuário cadastrado
// obs.: a lista de usuários reseta ao reiniciar a página

import { useState } from "react";
import { FormFactory } from "../index";
import { FormStyled, PageLayout } from "./styles";

const registerSchema = [
  {
    field: "name",
    placeholder: "name",
    type: "text", // input type, could be image, etc
    required: true,
  },
  {
    field: "email",
    placeholder: "email",
    type: "email",
    required: true,
    customValidation: (formInfo, usersData) => {
      // verifica se o email já está cadastrado
      const user = usersData.find(
        (element) => element.email === formInfo.email
      );
      return !user;
    },
  },
  {
    field: "age",
    placeholder: "age",
    type: "number",
    required: false,
  },
  {
    field: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: (formInfo) => formInfo.password.length > 6,
  },
  {
    field: "passwordConfirmation",
    placeholder: "repeat password",
    type: "password",
    required: true,
    customValidation: (formInfo) =>
      formInfo.password === formInfo.passwordConfirmation,
  },
];

const loginSchema = [
  {
    field: "email",
    placeholder: "email",
    type: "email",
    required: true,
  },
  {
    field: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: (formInfo, usersData) => {
      // verifica se a senha está correta para o email preenchido
      const user = usersData.find(
        (element) => element.email === formInfo.email
      );
      return user ? user.password === formInfo.password : false;
    },
  },
];

export function FormFactoryExample() {
  const [usersData, setUsersData] = useState([]);

  const RegisterForm = FormFactory(registerSchema, usersData);
  const LoginForm = FormFactory(loginSchema, usersData);

  // estado para definir qual sessão (register ou login) será exibida na página
  const [validSection, setValidSection] = useState("register");

  return (
    <PageLayout>
      {validSection === "register" && (
        <section>
          <h1>Registre-se</h1>
          <FormStyled>
            <RegisterForm
              onValidSubmit={(formInfo) => {
                setUsersData([...usersData, formInfo]);
                // eslint-disable-next-line no-alert
                alert("registrado com sucesso");
              }}
              // eslint-disable-next-line no-alert
              onInvalidSubmit={() => alert("não deu bom")}
              buttonContent="Registrar"
            />
          </FormStyled>
          <button type="button" onClick={() => setValidSection("enter")}>
            Já tenho registro
          </button>
        </section>
      )}

      {validSection === "enter" && (
        <section>
          <h1>Entrar</h1>
          <FormStyled>
            <LoginForm
              // eslint-disable-next-line no-alert
              onValidSubmit={() => alert("logado com sucesso")}
              // eslint-disable-next-line no-alert
              onInvalidSubmit={() => alert("não deu bom")}
              buttonContent="Entrar"
            />
          </FormStyled>
          <button type="button" onClick={() => setValidSection("register")}>
            Ainda não sou registrado
          </button>
        </section>
      )}
    </PageLayout>
  );
}
