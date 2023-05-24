import { FormFactory } from "../../FormFactory";

const UsersSchema = [
  {
    fieldName: "username",
    placeholder: "username",
    required: true,
    type: "text",
    label: "Nome",
  },
  {
    fieldName: "email",
    placeholder: "email",
    required: true,
    type: "email",
    label: "Email",
  },
  {
    fieldName: "credit",
    placeholder: "credit",
    required: false,
    type: "number",
    label: "Crédito",
  },
  {
    fieldName: "age",
    placeholder: "age",
    required: false,
    type: "number",
    label: "Idade",
  },
  {
    fieldName: "status",
    placeholder: "status",
    required: true,
    type: "text",
    label: "Status",
    customValidation: ({ formInfo }) => {
      // eslint-disable-next-line no-console
      if (formInfo.status == "active" || formInfo.status == "desactive") {
        return { valid: true };
      }
      return { error: "o status deve ser 'active' ou 'desactive'" };
    },
  },
  {
    fieldName: "role",
    placeholder: "role",
    required: false,
    type: "text",
    label: "Cargo",
  },
];

export const UsersForm = FormFactory(UsersSchema);
