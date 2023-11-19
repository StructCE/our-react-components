import React from "react";
import { DatePicker } from "../DatePicker";

export function DatePickerExample() {
  const corfundo = "#12191d";
  const cortexto = "white";
  const corhover = "#1d272c";
  const corselecionado = "#03a9f4";

  return (
    <section className="h-96 w-full relative flex flex-col justify-center items-center">
      <div className="flex bg-zinc-700 gap-4 p-2">
        <DatePicker
          corfundo={corfundo}
          cortexto={cortexto}
          corhover={corhover}
          corselecionado={corselecionado}
          useRange={false}
          formato={"m/d/a"}
        />
      </div>
    </section>
  );
}
