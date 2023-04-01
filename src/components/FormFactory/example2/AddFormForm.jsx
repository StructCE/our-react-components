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
    customValidation: (formInfo) => {
      if (formInfo.newRequired) {
        return ["y", "Y", "yes", "Yes", "n", "N", "no", "No"].includes(
          formInfo.newRequired
        );
      }
      return true;
    },
  },
  {
    field: "newType",
    placeholder: "type",
    required: false,
    label: "Tipo do input",
    customValidation: (formInfo) => {
      if (formInfo.newType) {
        return [
          "text",
          "number",
          "file",
          "email",
          "password",
          "image",
        ].includes(formInfo.newType);
      }
      return true;
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
