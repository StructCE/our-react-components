// este exemplo baseia-se em uma página onde você consegue ir criando seu próprio form.

// é um exemplo bastante útil para enteder, de forma dinâmica, a criação de um schema
// e sua utilização na chamada de uma FormFactory.

// Você preenche o AddForm, para adicionar um item ao schema do Form,
// e, para cada vez que o Form é preenchido, você pode exibir os dados submetidos.

import { useState } from "react";
import { FormFactory } from "..";
import { AddFormForm } from "./AddFormForm";
import { AddFormLayout, FormDataLayout, FormLayout } from "./styles";

export function FormFactoryExample2() {
  const [formSchema, setFormSchema] = useState([]);
  const [formData, setFormData] = useState({});

  const Form = FormFactory(formSchema);

  return (
    <>
      <FormLayout>
        <h1>Seu formulário</h1>
        <Form
          buttonContent="Exibir"
          onValidSubmit={({ formInfo }) => {
            setFormData(formInfo);
          }}
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

      <FormDataLayout>
        <h1>Informações do Form</h1>
        {formData &&
          Object.keys(formData).map((key) => (
            <p key={key}>
              {key}: {formData[key]}
            </p>
          ))}
      </FormDataLayout>
    </>
  );
}
