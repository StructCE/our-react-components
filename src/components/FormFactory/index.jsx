import { useState } from "react";

export function FormFactory(schema) {
  const handleOnSubmit = (event, formInfo, ValidSubmit, InvalidSubmit) => {
    event.preventDefault();

    let valid = true;

    schema.forEach((item) => {
      if (item.customValidation) {
        if (!item.customValidation(formInfo)) {
          valid = false;
        }
      }
    });

    if (valid) {
      ValidSubmit(formInfo);
    } else {
      InvalidSubmit(formInfo);
    }
  };

  // eslint-disable-next-line func-names
  return function ({ ValidSubmit, InvalidSubmit }) {
    const [formInfo, setFormInfo] = useState({});

    const handleOnChangeFormInfo = (event, key) => {
      setFormInfo({ ...formInfo, [key]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleOnSubmit(event, formInfo, ValidSubmit, InvalidSubmit)
        }
      >
        {/* <h1>Formulário</h1> */}
        {schema &&
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
        <button type="submit">Enviar</button>
      </form>
    );
  };
}
