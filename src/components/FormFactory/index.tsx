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
import { z } from "zod";

const mySchema = z.array(
  z.object({
    key: z.string(),
    fieldName: z.string(),
    required: z.boolean(),
    label: z.string(),
    customValidation: z
      .function()
      .args(
        z.record(z.string(), z.string()) // rever isso depois para generalizar para um schemaInfo
      )
      .returns(
        z.object({
          valid: z.boolean(),
          error: z.string(),
        })
      )
      .optional(),
  })
);

const onValidSubmit = z
  .function()
  .args(
    z.record(z.string(), z.string()) // rever isso depois para generalizar para um schemaInfo
  )
  .returns(z.void());

const onInvalidSubmit = z
  .function()
  .args(
    z.record(z.string(), z.string(), z.object({ errors: z.string() })) // rever isso depois para generalizar para um schemaInfo
  )
  .returns(z.void());

const formItemInfo = z.record(z.string(), z.string());

type SchemaItem = z.infer<typeof mySchema>;

type OnValidSubmitFn = z.infer<typeof onValidSubmit>;

type OnInvalidSubmitFn = z.infer<typeof onInvalidSubmit>;

type FormInfo = z.infer<typeof formItemInfo>;

export function FormFactory(schema: SchemaItem) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: FormInfo,
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
    const [formInfo, setFormInfo] = useState<FormInfo>({});

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
