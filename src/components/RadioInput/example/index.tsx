// Proposta do exemplo:

// - Pode ser usado o RadioInput original, pois:
//   - A aparência dos radios é diferente para cada um dos inputs;
//   - O highlight on select também é feito na página;
//   - Todo o estado dos radios é gerenciado pela página, e não pelo componente;

// - Criar uma página que permita o usuário escolher uma direção para mover o quadrado

import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";
import { RadioInput } from "..";
import { ArrowUp, ArrowUpLeft, ArrowUpRight } from "./svgs";

export default () => (
  <RadioGroup.Root>
    <RadioGroup.Item>
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  </RadioGroup.Root>
);

export function RadioInputExample() {
  const [direction, setDirection] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  function handleSubmitMove(e) {
    // prevenir o reload da página no "submit" (comportamento padrão do form)
    e.preventDefault();

    // passando uma função para o setState, garantimos que o valor atual que será usado
    // para calcular o novo valor
    setCurrentPosition(
      (prevCurrentPosition) => prevCurrentPosition + direction
    );

    // usar "setCurrentPosition(currentPosition + direction);" não é boa prática, pois
    // pode causar bugs
  }

  function handleChangeMove(e) {
    setDirection(Number(e.target.value));
  }

  return (
    <RadioGroup.Root className="pt-72 items-center content-center flex-col flex w-full h-screen">
      <form onSubmit={handleSubmitMove}>
        <RadioInput
          name="direction"
          id="left"
          value={-1}
          onChange={handleChangeMove}
        >
          <ArrowUpLeft
            style={{
              cursor: "pointer",
              background: direction === -1 ? "rgba(255, 255, 255, 0.8)" : "",
            }}
          />
        </RadioInput>
        <RadioInput
          name="direction"
          id="up"
          value={0}
          onChange={handleChangeMove}
        >
          <ArrowUp
            style={{
              cursor: "pointer",
              background: direction === 0 ? "rgba(255, 255, 255, 0.8)" : "",
            }}
          />
        </RadioInput>
        <RadioInput
          name="direction"
          id="down"
          value={1}
          onChange={handleChangeMove}
        >
          <ArrowUpRight
            style={{
              cursor: "pointer",
              background: direction === 1 ? "rgba(255, 255, 255, 0.8)" : "",
            }}
          />
        </RadioInput>
        <br />
        <button type="submit">Move</button>
      </form>

      <div
        style={{
          display: "block",
          zIndex: -1,
          background: "red",
          margin: "20px",
          width: "50px",
          height: "50px",
          transform: `translateX(${currentPosition * 200}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </RadioGroup.Root>
  );
}
