import { z } from "zod";
import { FormFactory } from "../../FormFactory";

export const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  credit: z.number().optional(),
  age: z.number().min(18, { message: "Você deve ser maior de idade" }),
  role: z.enum(["Diretor", "Membro"], {
    errorMap: () => ({
      message: "Role deve ser 'Membro' ou 'Diretor'",
    }),
  }),
});

export const UsersForm = FormFactory({
  schema: userSchema,
  fields: {
    username: {
      defaultValue: "",
      label: "Nome",
      inputAtrr: {
        placeholder: "username",
      },
    },
    email: {
      defaultValue: "",
      label: "Email",
      inputAtrr: {
        placeholder: "email",
      },
    },
    credit: {
      defaultValue: 0,
      label: "Crédito",
      inputAtrr: {
        placeholder: "credit",
        type: "number",
      },
      transform: Number,
    },
    age: {
      defaultValue: 0,
      label: "Idade",
      inputAtrr: {
        placeholder: "age",
        type: "number",
      },
      transform: Number,
    },
    role: {
      defaultValue: "Membro",
      label: "Diretor ou Membro?",
    },
  },
});
