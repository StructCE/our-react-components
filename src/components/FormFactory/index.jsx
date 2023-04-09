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

import { useState } from "react";

export function FormFactory(schema) {
  const handleSubmit = (event, formInfo, onValidSubmit, onInvalidSubmit) => {
    event.preventDefault();

    const errors = [];
    schema.forEach((item) => {
      if (item.customValidation) {
        const { valid, error } = item.customValidation({ formInfo });
        if (!valid) {
          errors.push(error);
        }
      }
    });

    if (errors.length === 0) {
      onValidSubmit({ formInfo });
    } else {
      onInvalidSubmit({ formInfo, errors });
    }
  };

  // eslint-disable-next-line func-names
  return function ({ onValidSubmit, onInvalidSubmit, buttonContent }) {
    // formInfo: objeto que contém as informações preenchidas no form {fieldName: value}
    const [formInfo, setFormInfo] = useState({});

    const handleChange = (event, fieldName) => {
      setFormInfo({ ...formInfo, [fieldName]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleSubmit(event, formInfo, onValidSubmit, onInvalidSubmit)
        }
      >
        {schema &&
          // para cada item do schema, é gerada uma div com label e input
          schema.map((item) => {
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
