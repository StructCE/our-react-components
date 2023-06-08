/* eslint-disable @typescript-eslint/no-unused-vars */
import * as RadioGroup from "@radix-ui/react-radio-group";
import React from "react";

// Copiando e modificando o RadioInput original:

// Objetivo da mudança:
// - Isolar a aparência do input radio no componente

export const CustomRadio = React.forwardRef(
  (
    props: RadioGroup.RadioGroupItemProps,
    ref: React.ForwardedRef<HTMLButtonElement | null>
  ) => {
    return (
      <RadioGroup.Item
        ref={ref}
        {...props}
        className="w-4 h-4 border-current border rounded-full outline-none cursor-pointer flex m-0"
      >
        <RadioGroup.Indicator className="w-[72%] h-[72%] rounded-full bg-current m-auto" />
      </RadioGroup.Item>
    );
  }
);
