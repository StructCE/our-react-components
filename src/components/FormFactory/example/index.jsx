// import { useState } from "react";
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
    customValidation: (formInfo, userData) => formInfo.email === userData.email,
  },
  {
    field: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: (formInfo, userData) =>
      formInfo.password === userData.password,
  },
];

export function FormFactoryExample() {
  const [userData, setUserData] = useState({});

  const RegisterForm = FormFactory(registerSchema);
  const LoginForm = FormFactory(loginSchema, userData);

  const [validSection, setValidSection] = useState("register");

  return (
    <PageLayout>
      <section className={validSection === "register" ? "validSection" : ""}>
        <h1>Registre-se</h1>
        <FormStyled>
          <RegisterForm
            onValidSubmit={(formInfo) => {
              setUserData(formInfo);
              // eslint-disable-next-line no-alert
              alert("registrado com sucesso");
            }}
            // eslint-disable-next-line no-alert
            onInvalidSubmit={() => alert("não deu bom")}
            buttonValue="Registrar"
          />
        </FormStyled>
        <button type="button" onClick={() => setValidSection("enter")}>
          Já tenho registro
        </button>
      </section>

      <section className={validSection === "enter" ? "validSection" : ""}>
        <h1>Entrar</h1>
        <FormStyled>
          <LoginForm
            // eslint-disable-next-line no-alert
            onValidSubmit={() => alert("logado com sucesso")}
            // eslint-disable-next-line no-alert
            onInvalidSubmit={() => alert("não deu bom")}
            buttonValue="Entrar"
          />
        </FormStyled>
        <button type="button" onClick={() => setValidSection("register")}>
          Ainda não sou registrado
        </button>
      </section>
    </PageLayout>
  );
}
