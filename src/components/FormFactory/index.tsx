// Forma de uso:
//  -> construa um schema para a FormFactory. Será um array de objetos, onde cada
//  objeto será um label + input do form. Lembre-se que o formInfo são os dados
//  do form construídos dentro da própria FormFactory:
//      ->Lugar para passar suas validações:
//        const Schema = z
//          .object({
//            username: z.string().min(3).max(15),
//            password: z.string().min(6),
//            passwordConfirmation: z.string().min(6),
//          })
//          .refine((schema) => schema.password === schema.passwordConfirmation, {
//            message: "As senhas estão diferentes",
//          });
// 
// 
//        const SchemaInfo: FormFactoryInfo<typeof Schema> = {
//          schema: Schema,
//          fields: {
//            username: {
//              label: "Nome de usuário",
//              required: true
//            },
//            password: {
//              label: "Senha",
//              required: true
//            },
//            passwordConfirmation: {
//              label: "ava",
//              required: true
//            },
//          },
//        };
//  -> chame a função FormFactory, passando como argumento o schema:
//      const SeuForm = FormFactory(SchemaInfo)
//  -> agora basta chamar o componente SeuForm na sua página:
//      <SeuForm
//        buttonContent=""
//        onValidSubmit={ function ({ formInfo }) }
//        onInvalidSubmit={ function ({ formInfo, errors }) }
//      />

import { useState, type ChangeEvent, type FormEvent, HTMLAttributes  } from "react";
import { ZodError, ZodType, z } from "zod";

type OnValidSubmitFn<SchemaType> = (formInfo: SchemaType) => void;

type OnInvalidSubmitFn<SchemaType> = (
  formInfo: SchemaType,
  error: ZodError
) => void;

export type FormFactoryInfo<SchemaType extends ZodType<any, any, any>> = {
  schema: SchemaType;
  fields: FieldsInfo<z.infer<SchemaType>>;
};

type FieldsInfo<SchemaType> = { // rever se apenas label existe
  [key in keyof SchemaType]: {
    label: string
    required: boolean
    inputAtrr?: HTMLAttributes<HTMLInputElement>
  }
};

export function FormFactory<SchemaType extends ZodType>(schemaInfo: FormFactoryInfo<SchemaType>) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: z.infer<SchemaType>,
    onValidSubmit: OnValidSubmitFn<SchemaType>,
    onInvalidSubmit: OnInvalidSubmitFn<SchemaType>
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
    onValidSubmit: OnValidSubmitFn<SchemaType>;
    onInvalidSubmit: OnInvalidSubmitFn<SchemaType>;
    buttonContent?: string;
  }) {
    const [formInfo, setFormInfo] = useState<z.infer<SchemaType>>({} as z.infer<SchemaType>);

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
      {Object.entries(schemaInfo.fields).map(([key, fieldInfo]) => {
        const { label, required, ...atributes} = fieldInfo

        return (
          <div key={key}>
              {label && <label htmlFor={key}>{label}</label>}
              <input
                id={key}
                required={required}
                value={formInfo[key] || ""}
                onChange={(event) => handleChange(event, key)}
                {...atributes}
              />
            </div>
        )
        })
      }
        {/* {schemaInfo.fields.map((item) => {
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
        })} */}
        <button type="submit">{buttonContent || "Enviar"}</button>
      </form>
    );
  };
}
