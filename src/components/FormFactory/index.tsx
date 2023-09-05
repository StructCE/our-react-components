// Forma de uso:
//  -> primeiro faça um ZodObject que vai gerenciar as validações:
//    -> a partir desse tópico há várias formas de validações: https://zod.dev/?id=strings
//      ->Lugar para passar suas validações:
//
//        const schema = z
//          .object({
//            username: z.string().min(3).max(15),
//            password: z.string().min(6),
//            passwordConfirmation: z.string().min(6),
//          })
//          .refine((schema) => schema.password === schema.passwordConfirmation, {
//            message: "As senhas estão diferentes",
//          });
//
//  -> depois, crie um objecto do tipo FormFactoryInfo que recebe o Schema acima e passa pro parametro schema. No parâmetro
//      fields, passe um objeto em que cada chave foi declarada no Schema acima. Nos valores temos:
//        *label -> string
//        *defaultValue -> mesmo tipo declarado no Schema acima
//        *inputAtrr -> um objeto com quaisqueres parâmetros de da tag input e seus reespectivos valores
//
//
//        const SchemaInfo: FormFactoryInfo<typeof Schema> = {
//          schema: Schema,
//          fields: {
//            name: {
//              label: "name",
//              defaultValue: "seu nome",
//            },
//            email: {
//              label: "email",
//              defaultValue: "email.com",
//              inputAtrr: { type: "email", required: true },
//            },
//            age: {
//              label: "age",
//              defaultValue: 0,
//              inputAtrr: { type: "number" },
//            },
//          };
//  -> chame a função FormFactory, passando como argumento o schema:
//      const SeuForm = FormFactory(SchemaInfo)
//  -> agora basta chamar o componente SeuForm na sua página:
{
  /*     
        <SeuForm
          onValidSubmit={(data) => {
            api
              .post("/", data)
              .then(() => alert("sucesso"))
              .catch((e) => alert(e));
          }}
          onInvalidSubmit={(error) => {
            alert(error);
          }}
          buttonContent="Enviar"
        /> 
*/
}

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
  } & (z.output<SchemaType>[key] extends string
    ? { transform?: (arg: string) => string }
    : { transform: (arg: string) => z.output<SchemaType>[key] });
};

export function FormFactory<SchemaType extends ZodType>({
  fields,
  schema,
}: FormFactoryInfo<SchemaType>) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: z.output<SchemaType>,
    onValidSubmit: OnValidSubmitFn<SchemaType>,
    onInvalidSubmit: OnInvalidSubmitFn,
    setErrors: (error: ZodError | null) => void
  ) => {
    event.preventDefault();

    const response = schema.safeParse(formInfo);
    if (response.success) {
      onValidSubmit(formInfo);
    } else {
      setErrors(response.error);
      onInvalidSubmit(response.error);
    }
  };

  // É comum HOC (High Order Components) dar problema com fast refresh/hot reload
  return function FormComponent({
    onValidSubmit,
    onInvalidSubmit,
    buttonContent,
  }: {
    onValidSubmit: OnValidSubmitFn<SchemaType>;
    onInvalidSubmit: OnInvalidSubmitFn;
    buttonContent?: string;
  }) {
    const defaultFormInfo = Object.entries(fields).reduce(
      (
        acc,
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key, fieldInfo]: [keyof z.output<typeof schema>, any]
      ) => ({
        ...acc,
        //eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        [key]: fieldInfo.defaultValue, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
      }),
      {}
    );

    const [errors, setErrors] = useState<ZodError | null>(null);

    const [formInfo, setFormInfo] =
      useState<z.output<SchemaType>>(defaultFormInfo);

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
      key: keyof z.output<SchemaType>
    ) => {
      const transf = fields[key].transform;
      setFormInfo({
        ...formInfo,
        [key]: transf ? transf(event.target.value) : event.target.value,
      });
    };

    return (
      <form
        className="bg-zinc-900 text-white p-4 rounded-md"
        onSubmit={(event) =>
          handleSubmit(
            event,
            formInfo,
            onValidSubmit,
            onInvalidSubmit,
            setErrors
          )
        }
      >
        {Object.entries(fields).map(([key, fieldInfo]) => {
          const { label, inputAtrr } = fieldInfo as (typeof fields)[typeof key];
          return (
            <div key={key} className="flex flex-col">
              <label
                className="text-opacity-80 text-white pt-4 pb-1"
                htmlFor={key}
              >
                {label}
              </label>
              <input
                key={key}
                className="bg-zinc-800 text-white rounded-sm p-2 focus-visible:outline focus-visible:outline-neutral-300"
                id={key}
                value={formInfo[key as keyof z.output<SchemaType>]}
                onChange={(event) => handleChange(event, key)}
                {...inputAtrr}
              />
              <span className="text-red-400 p-1">
                {errors?.flatten().fieldErrors[key]?.map((error) => (
                  <p className="max-w-[25ch]" key={error}>
                    {error}
                  </p>
                ))}
              </span>
            </div>
          );
        })}
        <span className="text-red-400 p-1">
          {errors?.flatten().formErrors?.map((error) => (
            <p className="max-w-[25ch]" key={error}>
              {error}
            </p>
          ))}
        </span>
        <button
          className="mt-6 w-full bg-zinc-800 p-2 rounded-md"
          type="submit"
        >
          {buttonContent || "Enviar"}
        </button>
      </form>
    );
  };
}
