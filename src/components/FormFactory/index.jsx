// Forma de uso:
//  -> construa um schema para a FormFactory. Será um array de objetos, onde cada
//  objeto será um label + input do form (ver exemplo 2 para entender como montar o schema)
//  -> chame a função FormFactory, passando como argumentos o schema e possíveis dados
//  para serem utilizados nos customValidation's, se existirem. Lembre-se que o formInfo
//  são os dados do form construídos dentro da própria FormFactory:
//    const SeuForm = FormFactory(schema, ...args)
//  -> agora basta chamar o componente SeuForm na sua página:
//    <SeuForm buttonContent="" onValidSubmit={function} onInvalidSubmit={function}/>

import { useState } from "react";

export function FormFactory(schema) {
  const handleOnSubmit = (event, formInfo, onValidSubmit, onInvalidSubmit) => {
    event.preventDefault();

    // caso valid seja true, realiza o onValidSubmit
    // caso valid seja false, realiza o onInvalidSubmit
    let valid = true;

    schema.forEach((item) => {
      if (item.customValidation) {
        if (!item.customValidation(formInfo)) {
          valid = false;
        }
      }
    });

    if (valid) {
      onValidSubmit(formInfo);
    } else {
      onInvalidSubmit(formInfo);
    }
  };

  // eslint-disable-next-line func-names
  return function ({ onValidSubmit, onInvalidSubmit, buttonContent }) {
    // formInfo: objeto que contém as informações preenchidas no form {field: value}
    const [formInfo, setFormInfo] = useState({});

    const handleOnChange = (event, field) => {
      setFormInfo({ ...formInfo, [field]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleOnSubmit(event, formInfo, onValidSubmit, onInvalidSubmit)
        }
      >
        {schema &&
          // para cada item do schema, é gerada uma div com label e input
          schema.map((item) => {
            const { field, required, label, ...attributes } = item;
            delete attributes.customValidation;

            return (
              <div key={field}>
                {label && <label htmlFor={field}>{label}</label>}
                <input
                  id={field}
                  required={required ? "required" : ""}
                  value={formInfo[field] ? formInfo[field] : ""}
                  onChange={(event) => handleOnChange(event, field)}
                  {...attributes}
                />
              </div>
            );
          })}
        {buttonContent && <button type="submit">{buttonContent}</button>}
      </form>
    );
  };
}
