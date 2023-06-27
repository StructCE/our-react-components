import { FormFactory } from "..";

type FormField = {
  fieldName: string;
  placeholder: string;
  required: boolean;
  type: string;
  customValidation?: ({ formInfo }: { formInfo: Record<string, string> }) => {
    valid?: boolean;
    error?: string;
  };
};

const registerSchema: FormField[] = [
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
      if (formInfo.password?.length && formInfo.password?.length > 5) {
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

const loginSchema = registerSchema.filter((field) =>
  ["email", "password"].includes(field.fieldName)
);

const RegisterForm = FormFactory(registerSchema);
const LoginForm = FormFactory(loginSchema);
export { RegisterForm, LoginForm };
