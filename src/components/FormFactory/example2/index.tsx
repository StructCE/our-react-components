import { useState } from "react";
import { AddFormForm } from "./AddFormForm";
import { AddFormLayout, FormCodeLayout, FormLayout } from "./styles";
import { FormFactory } from "..";

interface FormInfo {
  newField: string;
  newPlaceholder: string;
  newRequired: string;
  newType: string;
  newLabel: string;
  newAlt: string;
}

export function FormFactoryExample2() {
  const [formSchema, setFormSchema] = useState<FormInfo>(FormInfo[]);

  const Form = FormFactory(formSchema);

  const codeFormLines = [
    "// Optional schema[number] props:",
    "// - customValidation: ({ formInfo }) => ({ valid: boolean, error: string })",
    "// - any input specific attributes can be passed",
    "",
    `const schema: FormSchema[] = ${JSON.stringify(formSchema, null, 4)}`,
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

  const handleValidSubmit = () => {
    alert("enviado");
  };

  const handleInvalidSubmit = ({ errors }: { errors: string[] }) => {
    errors.map((error) => alert(error));
  };

  const handleAddField = ({ formInfo }: { formInfo: FormInfo }) => {
    setFormSchema((prevState) => [
      {
        ...prevState,
        fieldName: formInfo.newField,
        placeholder: formInfo.newPlaceholder,
        required: ["y", "Y", "yes", "Yes"].includes(formInfo.newRequired),
        type: formInfo.newType,
        label: formInfo.newLabel,
        alt: formInfo.newAlt,
      },
    ]);
  };

  return (
    <>
      <FormLayout>
        <h1>Seu formulário</h1>
        <Form onValidSubmit={handleValidSubmit} />
      </FormLayout>

      <AddFormLayout>
        <h1>Adicione um input ao seu formulário</h1>
        <AddFormForm
          buttonContent="Adicionar"
          onValidSubmit={handleAddField}
          onInvalidSubmit={handleInvalidSubmit}
        />
      </AddFormLayout>

      <FormCodeLayout>
        <h1>Código do seu formulário</h1>
        <pre>{codeFormLines.join("\n")}</pre>
      </FormCodeLayout>
    </>
  );
}
