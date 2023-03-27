import { useState } from "react";

export function FormFactory(schema, ...args) {
  // formInfo: informações salvas ao preencher o form
  const handleOnSubmit = (event, formInfo, onValidSubmit, onInvalidSubmit) => {
    event.preventDefault();

    // flag de validação:
    // caso ela seja true, realiza o onValidSubmit
    // caso ela seja false, realiza o onInvalidSubmit
    let valid = true;

    // lógica para realizar a verificação de cada item do schema
    schema.forEach((item) => {
      if (item.customValidation) {
        if (!item.customValidation(formInfo, ...args)) {
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
    const [formInfo, setFormInfo] = useState({});

    // manipulação do onChange para alterar o formInfo, conforme os inputs são preenchidos
    const handleOnChangeFormInfo = (event, field) => {
      setFormInfo({ ...formInfo, [field]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleOnSubmit(event, formInfo, onValidSubmit, onInvalidSubmit)
        }
      >
        {schema &&
          // para cada item do schema, é gerado um input
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
                  onChange={(event) => handleOnChangeFormInfo(event, field)}
                  {...attributes}
                />
              </div>
            );
          })}
        <button type="submit">{buttonContent}</button>
      </form>
    );
  };
}
