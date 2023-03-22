import { useState } from "react";

export function FormFactory({ config }) {
  const [formInfo, setFormInfo] = useState({});

  const handleOnChangeFormInfo = (event, key) => {
    setFormInfo({ ...formInfo, [key]: event.target.value });
  };

  const handleOnSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(formInfo);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        let valid = true;

        config.forEach((item) => {
          if (item.customValidation) {
            if (!item.customValidation(formInfo)) {
              valid = false;
            }
          }
        });

        if (valid) {
          handleOnSubmit();
        } else {
          // eslint-disable-next-line no-alert
          alert("erro de validação");
        }
      }}
    >
      <h1>Formulário</h1>
      {config &&
        config.map((item) => {
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
}
