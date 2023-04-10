// este exemplo baseia-se em uma página onde você consegue ir criando seu próprio form.

// é um exemplo bastante útil para enteder, de forma dinâmica, a criação de um schema
// e sua utilização na chamada de uma FormFactory.

// Você preenche o AddForm, para adicionar um item ao schema do Form,

import { useState } from "react";
import { AddFormForm } from "./AddFormForm";
import { AddFormLayout, FormCodeLayout, FormLayout } from "./styles";
import { FormFactory } from "..";

export function FormFactoryExample2() {
  const [formSchema, setFormSchema] = useState([]);

  const Form = FormFactory(formSchema);

  const codeFormLines = [
    "// Optional schema[number] props:",
    "// - customValidation: ({ formInfo }) => ({ valid: boolean, error: string })",
    "// - any input specific attributes can be passed",
    "",
    `const schema = ${JSON.stringify(formSchema, null, 4)}`,
    "",
    "export const Form = FormFactory(schema)",
    "",
    "// Optional <Form> props:",
    "// - buttonContent: string",
    "// - onValidSubmit: ({ formInfo }) => void",
    "// - onInvalidSubmit: ({ formInfo, errors }) => void",
    "",
    "",
    "",
  ];

  return (
    <>
      <FormLayout>
        <h1>Seu formulário</h1>
        <Form
          onValidSubmit={() =>
            // eslint-disable-next-line no-alert
            alert("enviado")
          }
        />
      </FormLayout>

      <AddFormLayout>
        <h1>Adicione um input ao seu formulário</h1>
        <AddFormForm
          buttonContent="Adicionar"
          onValidSubmit={({ formInfo }) =>
            setFormSchema([
              ...formSchema,
              {
                fieldName: formInfo.newField,
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
          onInvalidSubmit={({ errors }) => {
            // eslint-disable-next-line no-alert
            errors.map((error) => alert(error));
          }}
        />
      </AddFormLayout>

      <FormCodeLayout>
        <h1>Código do seu formulário</h1>
        <pre>{codeFormLines.join("\n")}</pre>
      </FormCodeLayout>
    </>
  );
}
