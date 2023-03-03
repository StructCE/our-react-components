import { useState } from "react";
import { CustomRadio } from "./CustomRadio";

export function RadioInputExample2() {
  const [formInfo, setFormInfo] = useState({
    paymentMethod: "",
    value: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (Number.isNaN(Number(value))) {
      setFormInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    } else {
      setFormInfo((prevInfo) => ({ ...prevInfo, [name]: Number(value) }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // sendInformationToBackend();
    // eslint-disable-next-line no-console
    console.log(formInfo);
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>Faça o pagamento</h1>
      <h2>Escolha a forma de pagamento</h2>
      <CustomRadio
        name="paymentMethod"
        value="card"
        id="card"
        checked={formInfo.paymentMethod === "card"}
        onChange={handleChange}
      >
        No Cartão
      </CustomRadio>
      <CustomRadio
        name="paymentMethod"
        id="pix"
        value="pix"
        checked={formInfo.paymentMethod === "pix"}
        onChange={handleChange}
      >
        No PIX
      </CustomRadio>
      <h2>Qual o valor?</h2>
      <input
        type="number"
        name="value"
        id="valueInput"
        onChange={handleChange}
        value={formInfo.value}
        step={100}
      />
      {/* <label htmlFor="value" aria-controls="formValue">
        Em centavos de real
      </label> */}
      <br />
      <button type="submit">Enviar form</button>
    </form>
  );
}
