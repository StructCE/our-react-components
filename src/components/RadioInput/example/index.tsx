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

  function handleChangeMove(e: string) {
    setDirection(Number(e));
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
            className="relative w-6 h-6 focus:bg-white"
            id="left"
          >
            <ArrowUpLeft className="cursor-pointer" />
            <RadioGroup.Indicator className="w-full h-full absolute inset-0 -z-10 bg-white" />
          </RadioGroup.Item>
          <br />
          <RadioGroup.Item
            className="relative w-6 h-6 focus:bg-white"
            id="up"
            value="0"
          >
            <ArrowUp className="cursor-pointer" />
            <RadioGroup.Indicator className="w-full h-full absolute inset-0 -z-10 bg-white" />
          </RadioGroup.Item>
          <br />
          <RadioGroup.Item
            className="relative w-6 h-6 focus:bg-white"
            id="down"
            value="1"
          >
            <ArrowUpRight className="cursor-pointer" />
            <RadioGroup.Indicator className="w-full h-full absolute inset-0 -z-10 bg-white" />
          </RadioGroup.Item>
        </RadioGroup.Root>
        <br />
        <button className="flex mx-auto my-0" type="submit">
          Move
        </button>
      </form>
      <div
        className="block mx-auto my-0 -z-10 bg-red-500 w-[50px] h-[50px] duration-700 ease-in-out"
        onSubmit={handleSubmitMove}
        style={{
          transform: `translateX(${currentPosition * 200}%)`,
        }}
      />
    </>
  );
}
