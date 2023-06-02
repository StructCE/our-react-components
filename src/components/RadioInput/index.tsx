import * as RadioGroup from "@radix-ui/react-radio-group";
import React from "react";

type Props = {
  value: string;
};
export function RadioInput({ ...props }: Props) {
  return (
    <RadioGroup.Item {...props} className="appearance-none absolute">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  );
}
