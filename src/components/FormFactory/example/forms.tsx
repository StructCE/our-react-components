import { z } from "zod";
import { FormFactory, type FormFactoryInfo } from "..";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = loginSchema
  .extend({
    name: z.string().min(3).max(15),
    age: z.number().optional(),
    passwordConfirmation: z.string().min(6),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: "As senhas estão diferentes",
  });

const loginSchemaInfo: FormFactoryInfo<typeof loginSchema> = {
  schema: loginSchema,
  fields: {
    email: {
      label: "email",
      defaultValue: "batata",
      inputAtrr: { type: "email" },
    },
    password: {
      label: "password",
      defaultValue: "batata",
      inputAtrr: { type: "password" },
    },
  },
};

const registerSchemaInfo: FormFactoryInfo<typeof registerSchema> = {
  schema: registerSchema,
  fields: {
    name: {
      label: "name",
      defaultValue: "batata",
      inputAtrr: { type: "text" },
    },
    email: {
      label: "email",
      defaultValue: "batata",
      inputAtrr: { type: "email" },
    },
    age: {
      label: "age",
      defaultValue: 0,
      inputAtrr: { type: "number" },
    },
    password: {
      label: "password",
      defaultValue: "",
      inputAtrr: { type: "password" },
    },
    passwordConfirmation: {
      label: "repeat password",
      defaultValue: "",
      inputAtrr: { type: "password" },
    },
  },
};

const RegisterForm = FormFactory(registerSchemaInfo);
const LoginForm = FormFactory(loginSchemaInfo);
export { RegisterForm, LoginForm };
