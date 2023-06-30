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

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type HTMLProps,
} from "react";
import { type ZodError, type ZodType, type z } from "zod";

type OnValidSubmitFn<SchemaType extends ZodType> = (
  formInfo: z.output<SchemaType>
) => void;

type OnInvalidSubmitFn = (error: ZodError) => void;

export type FormFactoryInfo<SchemaType extends ZodType> = {
  schema: SchemaType;
  fields: FieldsInfo<SchemaType>;
};

type FieldsInfo<SchemaType extends ZodType> = {
  [key in keyof z.output<SchemaType>]: {
    label: string;
    defaultValue: z.output<SchemaType>[key];
    inputAtrr?: HTMLProps<HTMLInputElement>;
  };
};

export function FormFactory<SchemaType extends ZodType>(
  schemaInfo: FormFactoryInfo<SchemaType>
) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: z.output<SchemaType>,
    onValidSubmit: OnValidSubmitFn<SchemaType>,
    onInvalidSubmit: OnInvalidSubmitFn
  ) => {
    event.preventDefault();

    const response = schemaInfo.schema.safeParse(formInfo);
    if (response.success) {
      onValidSubmit(formInfo);
    } else {
      onInvalidSubmit(response.error);
    }
  };

  return function FormComponent({
    onValidSubmit,
    onInvalidSubmit,
    buttonContent,
  }: {
    onValidSubmit: OnValidSubmitFn<SchemaType>;
    onInvalidSubmit: OnInvalidSubmitFn;
    buttonContent?: string;
  }) {
    const defaultFormInfo = Object.entries(schemaInfo.fields).reduce(
      (acc, [key, fieldInfo]) => ({
        ...acc,
        [key as keyof z.output<SchemaType>]: fieldInfo.defaultValue,
      }),
      {}
    );

    const [formInfo, setFormInfo] =
      useState<z.output<SchemaType>>(defaultFormInfo);

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
      key: keyof z.output<SchemaType>
    ) => {
      setFormInfo({ ...formInfo, [key]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleSubmit(event, formInfo, onValidSubmit, onInvalidSubmit)
        }
      >
        {Object.entries(schemaInfo.fields).map(([key, fieldInfo]) => {
          const { label, inputAtrr } = fieldInfo;
          return (
            <div key={key}>
              {label && <label htmlFor={key}>{label}</label>}
              <input
                id={key}
                value={formInfo[key as keyof z.output<SchemaType>]}
                onChange={(event) => handleChange(event, key)}
                {...inputAtrr}
              />
            </div>
          );
        })}
        <button type="submit">{buttonContent || "Enviar"}</button>
      </form>
    );
  };
}
