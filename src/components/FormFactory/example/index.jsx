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
  },
  {
    field: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: (formInfo) => formInfo.password.length > 6,
  },
];

export function FormFactoryExample() {
  const RegisterForm = FormFactory(registerSchema);
  const LoginForm = FormFactory(loginSchema);

  const [validSection, setValidSection] = useState("register");

  return (
    <PageLayout>
      <section className={validSection === "register" ? "" : "invalidSection"}>
        <h1>Registre-se</h1>
        <FormStyled>
          <RegisterForm
            // eslint-disable-next-line no-console
            onValidSubmit={(formInfo) => console.log(formInfo)}
            // eslint-disable-next-line no-alert
            onInvalidSubmit={() => alert("não deu bom")}
            buttonValue="Registrar"
          />
        </FormStyled>
        <button type="button" onClick={() => setValidSection("enter")}>
          Já tenho registro
        </button>
      </section>

      <section className={validSection === "enter" ? "" : "invalidSection"}>
        <h1>Entrar</h1>
        <FormStyled>
          <LoginForm
            // eslint-disable-next-line no-console
            onValidSubmit={(formInfo) => console.log(formInfo)}
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
