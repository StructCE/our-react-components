import React from "react";
import { DatePicker } from "..";

export function DatePickerExample() {
  return (
    <section className="h-96 w-full relative flex flex-col justify-center items-center">
      <DatePicker
        corfundo={"#12191d"}
        cortexto={"white"}
        corhover={"#1d272c"}
        corselecionado={"#03a9f4"}
        userange={true}
      />
    </section>
  );
}
