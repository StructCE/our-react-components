import { useState } from "react";
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

export function FormFactoryExample2() {
  const [formSchema, setFormSchema] = useState([]);
  const [formData, setFormData] = useState({});

  const Form = FormFactory(formSchema);
  const AddFormForm = FormFactory(addFormSchema);

  return (
    <>
      <div>
        <h1>Seu formulário</h1>
        <Form
          buttonContent="Exibir"
          onValidSubmit={(formInfo) => {
            setFormData(formInfo);
          }}
        />
      </div>

      <div>
        <h1>Adicione um input ao seu formulário</h1>
        <AddFormForm
          buttonContent="Adicionar"
          // eslint-disable-next-line no-alert
          onValidSubmit={(formInfo) =>
            setFormSchema([
              ...formSchema,
              {
                field: formInfo.newField,
                placeholder: formInfo.newPlaceholder,
                required: ["y", "Y", "yes", "Yes"].includes(
                  formInfo.newRequired
                ),
                type: formInfo.newType,
                label: formInfo.newLabel,
                alt: formInfo.newAlt,
              },
            ])
          }
          // eslint-disable-next-line no-alert
          onInvalidSubmit={() => alert("não deu bom")}
        />
      </div>

      <div>
        {formData &&
          Object.keys(formData).map((key) => (
            <p>
              {key}: {formData[key]}
            </p>
          ))}
      </div>
    </>
  );
}
