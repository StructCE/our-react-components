import { CalendarIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React from "react";
import { Calendario } from "./Calendario";
import "./DatePicker.css";
import { RangeCalendario } from "./RangeCalendario";

type Props = {
  corfundo: string;
  cortexto: string;
  corhover: string;
  corselecionado: string;
  userange: boolean;
};

export function DatePicker({
  corfundo,
  cortexto,
  corhover,
  corselecionado,
  userange,
}: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button>
          <CalendarIcon width="32" height="32" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          {userange ? (
            <RangeCalendario
              corfundo={corfundo}
              cortexto={cortexto}
              corhover={corhover}
            />
          ) : (
            <Calendario
              corfundo={corfundo}
              cortexto={cortexto}
              corhover={corhover}
              corselecionado={corselecionado}
            />
          )}
          <Popover.Arrow fill={corfundo} width="12" height="6" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
