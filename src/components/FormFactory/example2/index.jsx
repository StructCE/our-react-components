import { useState } from "react";
import { FormFactory } from "..";
import { AddFormForm } from "./addFormSchema";
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
          onValidSubmit={(formInfo) => {
            setFormData(formInfo);
          }}
        />
      </FormLayout>

      <AddFormLayout>
        <h1>Adicione um input ao seu formulário</h1>
        <AddFormForm
          buttonContent="Adicionar"
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
      </AddFormLayout>

      <FormDataLayout>
        <h1>Informações do Form</h1>
        {formData &&
          Object.keys(formData).map((key) => (
            <p>
              {key}: {formData[key]}
            </p>
          ))}
      </FormDataLayout>
    </>
  );
}
