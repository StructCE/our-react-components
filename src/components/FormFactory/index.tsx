// Forma de uso:
//  -> construa um schema para a FormFactory. Será um array de objetos, onde cada
//  objeto será um label + input do form. Lembre-se que o formInfo são os dados
//  do form construídos dentro da própria FormFactory:
//    const schema = {
//      {
//        fieldName,
//        required,
//        label,
//        placeholder,
//        customValidation: function ({ formInfo }),
//        ...attributes,
//      },
//      {...}
//    }
//  -> chame a função FormFactory, passando como argumento o schema:
//      const SeuForm = FormFactory(schema)
//  -> agora basta chamar o componente SeuForm na sua página:
//      <SeuForm
//        buttonContent=""
//        onValidSubmit={ function ({ formInfo }) }
//        onInvalidSubmit={ function ({ formInfo, errors }) }
//      />

import { useState, type ChangeEvent, type FormEvent } from "react";

interface SchemaItem {
  fieldName: string;
  required: boolean;
  label?: string;
  customValidation?: (formInfo: Record<string, string>) => {
    valid: boolean;
    error: string;
  };
  key: string;
}

type OnValidSubmitFn = (formInfo: Record<string, string>) => void;
type OnInvalidSubmitFn = (
  formInfo: Record<string, string>,
  errors: string[]
) => void;

export function FormFactory(schema: SchemaItem[]) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: Record<string, string>,
    onValidSubmit: OnValidSubmitFn,
    onInvalidSubmit: OnInvalidSubmitFn
  ) => {
    event.preventDefault();

    const errors: string[] = [];
    schema.forEach((item) => {
      if (item.customValidation) {
        const { valid, error } = item.customValidation(formInfo);
        if (!valid) {
          errors.push(error);
        }
      }
    });

    if (errors.length === 0) {
      onValidSubmit(formInfo);
    } else {
      onInvalidSubmit(formInfo, errors);
    }
  };

  return function FormComponent({
    onValidSubmit,
    onInvalidSubmit,
    buttonContent,
  }: {
    onValidSubmit: OnValidSubmitFn;
    onInvalidSubmit: OnInvalidSubmitFn;
    buttonContent?: string;
  }) {
    const [formInfo, setFormInfo] = useState<Record<string, string>>({});

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
      fieldName: string
    ) => {
      setFormInfo({ ...formInfo, [fieldName]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleSubmit(event, formInfo, onValidSubmit, onInvalidSubmit)
        }
      >
        {schema.map((item) => {
          const { fieldName, required, label, ...attributes } = item;
          delete attributes.customValidation;

          return (
            <div key={fieldName}>
              {label && <label htmlFor={fieldName}>{label}</label>}
              <input
                id={fieldName}
                required={required}
                value={formInfo[fieldName] || ""}
                onChange={(event) => handleChange(event, fieldName)}
                {...attributes}
              />
            </div>
          );
        })}
        <button type="submit">{buttonContent || "Enviar"}</button>
      </form>
    );
  };
}
