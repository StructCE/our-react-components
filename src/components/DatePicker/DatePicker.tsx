import { CalendarIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";
import { Calendario } from "./Calendario";
import "./DatePicker.css";
import { RangeCalendario } from "./RangeCalendario";

type Props = {
  corfundo: string;
  cortexto: string;
  corhover: string;
  corselecionado: string;
  useRange: boolean;
  formato: string;
};

function calculateTotalTime(startTime: string, endTime: string): string {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  const startDate = new Date(0, 0, 0, startHour, startMinute);
  const endDate = new Date(0, 0, 0, endHour, endMinute);

  let diff = endDate.getTime() - startDate.getTime();
  if (diff < 0) diff += 24 * 60 * 60 * 1000;

  const horas = Math.floor(diff / (60 * 60 * 1000));
  diff %= 60 * 60 * 1000;
  const minutos = Math.floor(diff / (60 * 1000));

  const totalTime = `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}`;
  return totalTime;
}

export function DatePicker({
  corfundo,
  cortexto,
  corhover,
  corselecionado,
  useRange,
  formato,
}: Props) {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalTime = calculateTotalTime(startTime, endTime);

  return (
    <>
      <div className={`flex gap-2 text-${cortexto}`}>
        <input
          autoComplete="off"
          spellCheck="false"
          type="time"
          min="00:00"
          max="23:59"
          tabIndex={0}
          className={`w-18 items-center p-1 bg-[${corhover}] rounded`}
          defaultValue={startTime}
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        ></input>
        <p className={`flex justify-center items-center`}>{" - "}</p>
        <input
          autoComplete="off"
          spellCheck="false"
          type="time"
          min="00:00"
          max="23:59"
          tabIndex={0}
          className={`w-18 items-center p-1 bg-[${corhover}] rounded`}
          defaultValue={endTime}
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
        ></input>
      </div>
      <Popover.Root>
        <Popover.Trigger>
          <button className="flex justify-center items-center">
            <CalendarIcon width="28" height="28" color={`${cortexto}`} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            {useRange ? (
              <>
                <RangeCalendario
                  corfundo={corfundo}
                  cortexto={cortexto}
                  corhover={corhover}
                  corselecionado={corselecionado}
                  horainicio={startTime}
                  horafim={endTime}
                />
              </>
            ) : (
              <>
                <Calendario
                  corfundo={corfundo}
                  cortexto={cortexto}
                  corhover={corhover}
                  corselecionado={corselecionado}
                  horainicio={startTime}
                  horafim={endTime}
                  formato={formato}
                />
              </>
            )}
            <Popover.Arrow fill={corfundo} width="12" height="6" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
