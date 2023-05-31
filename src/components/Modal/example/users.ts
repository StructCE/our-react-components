import { FormFactory } from "./form";

type FormSchema = {
  fieldName: string;
  placeholder: string;
  required: boolean;
  label: string;
  type: string;
  customValidation?: ({ formInfo }: { formInfo: Record<string, string> }) => {
    valid?: boolean;
    error?: string;
  };
};

const UsersSchema: FormSchema[] = [
  {
    fieldName: "username",
    placeholder: "username",
    required: true,
    label: "Nome",
    type: "text",
  },
  {
    fieldName: "email",
    placeholder: "email",
    required: true,
    label: "Email",
    type: "email",
  },
  {
    fieldName: "credit",
    placeholder: "credit",
    required: false,
    label: "Crédito",
    type: "number",
  },
  {
    fieldName: "age",
    placeholder: "age",
    required: false,
    label: "Idade",
    type: "number",
  },
  {
    fieldName: "status",
    placeholder: "status",
    required: true,
    label: "Status",
    type: "text",
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
    label: "Cargo",
    type: "text",
  },
];

export const UsersForm = FormFactory(UsersSchema);
