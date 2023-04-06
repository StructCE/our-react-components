import { FormFactory } from "..";

const addFormSchema = [
  {
    fieldName: "newField",
    placeholder: "field name",
    required: true,
    label: "Campo que representa o input",
  },
  {
    fieldName: "newPlaceholder",
    placeholder: "placeholder",
    required: false,
    label: "Placeholder do input",
  },
  {
    fieldName: "newRequired",
    placeholder: "required",
    required: false,
    label: "Este input é obrigatório? (y/n)",
    customValidation: ({ formInfo }) => {
      if (
        ["y", "Y", "yes", "Yes", "n", "N", "no", "No", undefined, ""].includes(
          formInfo.newRequired
        )
      ) {
        return { valid: true };
      }
      return { error: "resposta ao campo required não válida" };
    },
  },
  {
    fieldName: "newType",
    placeholder: "type",
    required: false,
    label: "Tipo do input",
    customValidation: ({ formInfo }) => {
      if (
        [
          "text",
          "number",
          "file",
          "email",
          "password",
          "image",
          undefined,
          "",
        ].includes(formInfo.newType)
      ) {
        return { valid: true };
      }
      return { error: "tipo de input não válido" };
    },
  },
  {
    fieldName: "newLabel",
    placeholder: "label",
    required: false,
    label: "Label que acompanhará o input",
  },
  {
    fieldName: "newAlt",
    placeholder: "alt",
    required: false,
    label: "É um input image? Digite seu alt",
  },
];

export const AddFormForm = FormFactory(addFormSchema);
