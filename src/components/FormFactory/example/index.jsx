// import { useState } from "react";
import styled from "styled-components";
import { FormFactory } from "../index";

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

const FormStyled = styled.form`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    > input {
      width: 10rem;
      height: 2rem;
      border: none;
      border-radius: 5px;
      outline: none;
      padding: 0.5rem;
    }
    > input + input {
      margin-top: 0.5rem;
    }
    > button {
      width: 4rem;
      height: 2rem;
      margin: 1rem;
    }
  }
`;

export function FormFactoryExample() {
  const RegisterForm = FormFactory(registerSchema);

  return (
    <>
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
    </>
  );
}
