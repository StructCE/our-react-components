// Proposta do exemplo:

// - Pode ser usado o RadioInput original, pois:
//   - A aparência dos radios é diferente para cada um dos inputs;
//   - O highlight on select também é feito na página;
//   - Todo o estado dos radios é gerenciado pela página, e não pelo componente;

// - Criar uma página que permita o usuário escolher uma direção para mover o quadrado

import * as RadioGroup from "@radix-ui/react-radio-group";
import React, { useState } from "react";
import { ArrowUp, ArrowUpLeft, ArrowUpRight } from "./svgs";

export function RadioInputExample() {
  const [direction, setDirection] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  function handleSubmitMove(e: React.FormEvent) {
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

  function handleChangeMove(newValue: string) {
    setDirection(Number(newValue));
  }

  return (
    <>
      <form onSubmit={handleSubmitMove}>
        <RadioGroup.Root
          className="flex-col flex items-center"
          value={String(direction)}
          onValueChange={handleChangeMove}
        >
          <RadioGroup.Item
            value="-1"
            className="flex-col w-[25px] h-[25px] focus:bg-white"
            id="left"
          >
            <ArrowUpLeft
              style={{
                cursor: "pointer",
                background: direction === -1 ? "rgba(255, 255, 255, 0.8)" : "",
              }}
            />
            <RadioGroup.Indicator className="w-full h-full -z-10" />
          </RadioGroup.Item>
          <br />
          <RadioGroup.Item
            className="flex-col w-[25px] h-[25px] focus:bg-white"
            id="up"
            value="0"
          >
            <ArrowUp
              style={{
                cursor: "pointer",
                background: direction === 0 ? "rgba(255, 255, 255, 0.8)" : "",
              }}
            />
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <br />
          <RadioGroup.Item
            className="flex-col w-[25px] h-[25px] focus:bg-white"
            id="down"
            value="1"
          >
            <ArrowUpRight
              className="border-black"
              style={{
                cursor: "pointer",
                background: direction === 1 ? "rgba(255, 255, 255, 0.8)" : "",
              }}
            />
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </RadioGroup.Root>
        <br />
        <button className="flex mx-auto my-0" type="submit">
          Move
        </button>
      </form>
      <div
        className="flex mx-auto my-0"
        style={{
          display: "block",
          zIndex: -1,
          background: "red",
          width: "50px",
          height: "50px",
          transform: `translateX(${currentPosition * 200}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </>
  );
}
