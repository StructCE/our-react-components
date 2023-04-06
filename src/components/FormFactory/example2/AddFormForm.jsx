import { FormFactory } from "..";

const addFormSchema = [
  {
    field: "newField",
    placeholder: "field",
    required: true,
    label: "Campo que representa o input",
  },
  {
    field: "newPlaceholder",
    placeholder: "placeholder",
    required: false,
    label: "Placeholder do input",
  },
  {
    field: "newRequired",
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
    field: "newType",
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
    field: "newLabel",
    placeholder: "label",
    required: false,
    label: "Label que acompanhará o input",
  },
  {
    field: "newAlt",
    placeholder: "alt",
    required: false,
    label: "É um input image? Digite seu alt",
  },
];

export const AddFormForm = FormFactory(addFormSchema);
