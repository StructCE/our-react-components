import { z } from "zod";
import type { FormFactoryInfo } from "..";
import { FormFactory } from "..";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido!" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres!" }),
});

export const registerSchema = loginSchema
  .extend({
    // extend gera um novo objeto com os valores antigos(nesse caso: email, password) e os novos abaixo
    name: z
      .string()
      .min(2, { message: "Nome deve ter pelo menos 6 caracteres" })
      .max(15, { message: "Nome deve ter no máximo 15 caracteres!" }),
    age: z.number().optional(),
    passwordConfirmation: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres!" }),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: "A senha e sua confirmação devem ser iguais!",
  });

const loginSchemaInfo: FormFactoryInfo<typeof loginSchema> = {
  schema: loginSchema,
  fields: {
    email: {
      label: "Email *",
      defaultValue: "",
      inputAtrr: { type: "email" },
    },
    password: {
      label: "Senha *",
      defaultValue: "",
      inputAtrr: { type: "password" },
    },
  },
};

const registerSchemaInfo: FormFactoryInfo<typeof registerSchema> = {
  schema: registerSchema,
  fields: {
    name: {
      label: "Nome *",
      defaultValue: "",
    },
    email: {
      label: "Email *",
      defaultValue: "",
      inputAtrr: { type: "email" },
    },
    age: {
      label: "Idade",
      defaultValue: 0,
      transform: Number,
      inputAtrr: { type: "number", min: 0 },
    },
    password: {
      label: "Senha *",
      defaultValue: "",
      inputAtrr: { type: "password" },
    },
    passwordConfirmation: {
      label: "Repita sua senha *",
      defaultValue: "",
      inputAtrr: { type: "password" },
    },
  },
};

const RegisterForm = FormFactory(registerSchemaInfo);
const LoginForm = FormFactory(loginSchemaInfo);
export { RegisterForm, LoginForm };
