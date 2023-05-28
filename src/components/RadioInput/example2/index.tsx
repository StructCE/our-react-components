// Proposta do exemplo:

// - O componente RadioInput deve ser modificado, pois:
//  - A aparência dos radios é a mesma para cada um dos inputs, então o apropriado é isolar em um componente;

// - Criar uma página que permita o usuário escolher uma forma de pagamento com os radios

import React, { useState } from "react";
import { CustomRadio } from "./CustomRadio";

export function RadioInputExample2() {
  const [formInfo, setFormInfo] = useState({
    paymentMethod: "",
    value: 0,
  });

  function handleChange(e: { target: { name: string; value: string } }) {
    // Reutilizar o mesmo handler para todos os inputs, basta colocar em cada um deles o atributo "name"
    const { name, value } = e.target;
    // Isso nem sempre pode ser feito

    if (Number.isNaN(Number(value))) {
      setFormInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    } else {
      setFormInfo((prevInfo) => ({ ...prevInfo, [name]: Number(value) }));
    }
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    // prevenir o reload da página no "submit" (comportamento padrão do form)
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log(formInfo);

    // sendInformationToBackend();
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>Faça o pagamento</h1>
      <fieldset>
        <legend>Escolha a forma de pagamento</legend>
        <CustomRadio
          children=""
          name="paymentMethod"
          value="card"
          id="card"
          checked={formInfo.paymentMethod === "card"}
          onChange={handleChange}
        />
        <label htmlFor="card">No Cartão</label>
        <CustomRadio
          children=""
          name="paymentMethod"
          id="pix"
          value="pix"
          checked={formInfo.paymentMethod === "pix"}
          onChange={handleChange}
        />
        <label htmlFor="pix">No PIX</label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Qual o valor?</legend>
        <input
          type="number"
          name="value"
          id="valueInput"
          onChange={handleChange}
          value={formInfo.value}
          step={100}
          min={100}
        />
        <label htmlFor="value" aria-controls="formValue">
          Em centavos de real
        </label>
      </fieldset>
      <br />
      <br />
      <button type="submit">Enviar form</button>
    </form>
  );
}
