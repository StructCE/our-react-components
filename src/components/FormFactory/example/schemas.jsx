import { FormFactory } from "..";

export const registerSchema = [
  {
    fieldName: "name",
    placeholder: "name",
    type: "text", // input type, could be image, etc
    required: true,
  },
  {
    fieldName: "email",
    placeholder: "email",
    type: "email",
    required: true,
  },
  {
    fieldName: "age",
    placeholder: "age",
    type: "number",
    required: false,
  },
  {
    fieldName: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: ({ formInfo }) => {
      // eslint-disable-next-line no-console
      if (formInfo.password.length > 5) {
        return { valid: true };
      }
      return { error: "a senha deve possuir mais de 5 caracteres" };
    },
  },
  {
    fieldName: "passwordConfirmation",
    placeholder: "repeat password",
    type: "password",
    required: true,
    customValidation: ({ formInfo }) => {
      if (formInfo.password === formInfo.passwordConfirmation) {
        return { valid: true };
      }
      return { error: "por favor, repita a senha corretamente" };
    },
  },
];

export const loginSchema = [
  {
    fieldName: "email",
    placeholder: "email",
    type: "email",
    required: true,
  },
  {
    fieldName: "password",
    placeholder: "password",
    type: "password",
    required: true,
  },
];

export const RegisterForm = FormFactory(registerSchema);
export const LoginForm = FormFactory(loginSchema);
