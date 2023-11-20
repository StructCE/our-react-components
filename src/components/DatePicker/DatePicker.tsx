import { CalendarIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";
import { Calendario } from "./Calendario";
import "./DatePicker.css";
import { RangeCalendario } from "./RangeCalendario";

type Props = {
  useRange: boolean;
  useHorario: boolean;
  formatoData: string;
  formatoAno: boolean;
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
  useRange,
  useHorario,
  formatoData,
  formatoAno,
}: Props) {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const totalTime = calculateTotalTime(startTime, endTime);

  return (
    <>
      {useHorario ? (
        <div className={`flex gap-1 corTexto`}>
          <input
            type="time"
            min="00:00"
            max="23:59"
            className={`w-18 items-center p-1 rounded inputTime`}
            defaultValue={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          ></input>
          <p className={`flex justify-center items-center`}>{" - "}</p>
          <input
            type="time"
            min="00:00"
            max="23:59"
            className={`w-18 items-center p-1 rounded inputTime`}
            defaultValue={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          ></input>
        </div>
      ) : (
        <></>
      )}
      <Popover.Root>
        <Popover.Trigger>
          <a className="flex justify-center items-center">
            <CalendarIcon width="28" height="28" className="corTexto" />
          </a>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            style={{
              filter: `drop-shadow(0 0 1px corTexto)`,
            }}
          >
            {useRange ? (
              <>
                <RangeCalendario
                  useHorario={useHorario}
                  formatoData={formatoData}
                  formatoAno={formatoAno}
                  horainicio={startTime}
                  horafim={endTime}
                  tempototal={totalTime}
                />
              </>
            ) : (
              <>
                <Calendario
                  useHorario={useHorario}
                  formatoData={formatoData}
                  formatoAno={formatoAno}
                  horainicio={startTime}
                  horafim={endTime}
                  tempototal={totalTime}
                />
              </>
            )}
            <Popover.Arrow
              fill={`corFundo`}
              width="12"
              height="6"
              style={{
                filter: `drop-shadow(0 0 0 corTexto)`,
              }}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
