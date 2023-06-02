/* eslint-disable @typescript-eslint/no-unused-vars */
import * as RadioGroup from "@radix-ui/react-radio-group";
import React from "react";

// Copiando e modificando o RadioInput original:

// Objetivo da mudança:
// - Isolar a aparência do input radio no componente

// Para isso, foi necessário:
// - Criar um novo componente CustomRadio, que recebe os props do RadioInput original
// - Desestruturar a propriedade "checked" do props, para que ele exista não só no input,
//    mas também Icone customizado, que está controlando a aparência do input
export const CustomRadio = React.forwardRef(
  (
    props: RadioGroup.RadioGroupItemProps,
    ref: React.ForwardedRef<HTMLButtonElement | null>
  ) => {
    return (
      <RadioGroup.Item
        ref={ref}
        {...props}
        className="w-12 border-black border-2 h-12 rounded-full outline-none cursor-pointer relative m-0"
      >
        <RadioGroup.Indicator className="w-full h-full rounded-full bg-green-700 absolute inset-0" />
      </RadioGroup.Item>
    );
  }
);
