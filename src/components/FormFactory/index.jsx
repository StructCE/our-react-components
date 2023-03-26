import { useState } from "react";

export function FormFactory(schema, ...props) {
  const handleOnSubmit = (event, formInfo, onValidSubmit, onInvalidSubmit) => {
    event.preventDefault();

    // flag de validação:
    // caso ela seja true, realiza o onValidSubmit
    // caso ela seja false, realiza o onInvalidSubmit
    let valid = true;

    // lógica para realizar a verificação de cada item do schema
    schema.forEach((item) => {
      if (item.customValidation) {
        if (!item.customValidation(formInfo, ...props)) {
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
  return function ({ onValidSubmit, onInvalidSubmit, buttonValue }) {
    const [formInfo, setFormInfo] = useState({});

    // manipulação do onChange para alterar o formInfo, conforme os inputs são preenchidos
    const handleOnChangeFormInfo = (event, key) => {
      setFormInfo({ ...formInfo, [key]: event.target.value });
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
            const { field } = item;

            return (
              <input
                key={field}
                type={item.type}
                placeholder={item.placeholder}
                required={item.required ? "required" : ""}
                value={formInfo[field] ? formInfo[field] : ""}
                onChange={(event) => handleOnChangeFormInfo(event, field)}
              />
            );
          })}
        <button type="submit">{buttonValue}</button>
      </form>
    );
  };
}
