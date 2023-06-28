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

import { useState, type ChangeEvent, type FormEvent, HTMLAttributes  } from "react";
import { ZodError, ZodObject, ZodType, z } from "zod";

const Schema = z.object({
  fieldName: z.string(),
  required: z.boolean(),
  label: z.string().optional(),
  key: z.string(),
})

type OnValidSubmitFn<schemaT> = (formInfo: schemaT) => void;

type OnInvalidSubmitFn<schemaT> = (
  formInfo: schemaT,
  error: ZodError
) => void;

type FormFactoryInfo<SchemaType extends ZodType<any, any, any>> = {
  schema: SchemaType;
  fields: FieldsInfo<z.infer<SchemaType>>;
}

type FieldsInfo<SchemaType> = { // rever se apenas label e Atrr existe
  [key in keyof SchemaType]: {
    label: string;
    inputAtrr?: HTMLAttributes<HTMLInputElement>;
  }
};

export function FormFactory<schemaT extends ZodType>(schemaInfo: FormFactoryInfo<schemaT>) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: z.infer<schemaT>,
    onValidSubmit: OnValidSubmitFn<schemaT>,
    onInvalidSubmit: OnInvalidSubmitFn<schemaT>
  ) => {
    event.preventDefault();

    const response = schemaInfo.schema.safeParse(formInfo);
    if (response.success) {
      onValidSubmit(formInfo);
    } else {
      onInvalidSubmit(formInfo, response.error);
    }
  };

  return function FormComponent({
    onValidSubmit,
    onInvalidSubmit,
    buttonContent,
  }: {
    onValidSubmit: OnValidSubmitFn<schemaT>;
    onInvalidSubmit: OnInvalidSubmitFn<schemaT>;
    buttonContent?: string;
  }) {
    const [formInfo, setFormInfo] = useState<schemaT>({} as schemaT);

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
      {schemaInfo.fields}
        {schemaInfo.fields.map((item) => {
          const { fieldName, required, label, ...attributes } = schemaInfo.fields;

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
