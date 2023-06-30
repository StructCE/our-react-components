import { z } from "zod";
import { FormFactory, type FormFactoryInfo } from "..";

const loginSchema = z.object({
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
      required: true,
      inputAtrr: { type: "email" },
    },
    password: {
      label: "password",
      required: true,
      inputAtrr: { type: "password" },
    },
  },
};

const registerSchemaInfo: FormFactoryInfo<typeof registerSchema> = {
  schema: registerSchema,
  fields: {
    name: {
      label: "name",
      required: true,
      inputAtrr: { type: "text" },
    },
    email: {
      label: "email",
      required: true,
      inputAtrr: { type: "email" },
    },
    age: {
      label: "age",
      required: false,
      inputAtrr: { type: "number" },
    },
    password: {
      label: "password",
      required: true,
      inputAtrr: { type: "password" },
    },
    passwordConfirmation: {
      label: "repeat password",
      required: true,
      inputAtrr: { type: "password" },
    },
  },
};

const RegisterForm = FormFactory(registerSchemaInfo);
const LoginForm = FormFactory(loginSchemaInfo);
export { RegisterForm, LoginForm };
