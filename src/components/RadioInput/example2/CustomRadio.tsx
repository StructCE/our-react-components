/* eslint-disable @typescript-eslint/no-unused-vars */
import * as RadioGroup from "@radix-ui/react-radio-group";
import React from "react";

type Props = {
  children: React.ReactNode;
  checked: boolean;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLButtonElement>;
};

// Copiando e modificando o RadioInput original:

// Objetivo da mudança:
// - Isolar a aparência do input radio no componente

// Para isso, foi necessário:
// - Criar um novo componente CustomRadio, que recebe os props do RadioInput original
// - Desestruturar a propriedade "checked" do props, para que ele exista não só no input,
//    mas também Icone customizado, que está controlando a aparência do input
export function CustomRadio({ children, checked, id, ...props }: Props) {
  return (
    <RadioGroup.Root>
      <RadioGroup.Item
        {...props}
        className="w-12 border-black border-2 appearance-none h-12 rounded-full focus:bg-green-700 outline-none cursor-pointer "
      >
        <RadioGroup.Indicator></RadioGroup.Indicator>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
