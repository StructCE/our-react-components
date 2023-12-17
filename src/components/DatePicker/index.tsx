/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getLocalTimeZone, isToday } from "@internationalized/date";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { I18nProvider } from "@react-aria/i18n";
import { default as React, useEffect, useState } from "react";
import { useDateFormatter } from "react-aria";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
  RangeCalendar,
  type DateRange,
  type DateValue,
} from "react-aria-components";
import "./DatePicker2.css";

type Props = {
  useRange: boolean;
  useHorario: boolean;
  formatoData: string;
  formatoAno: boolean;
  onVariablesChange: (
    dataSelecionada: string | undefined,
    dataInicial: string | undefined,
    dataFinal: string | undefined,
    horarioInicial: string | undefined,
    horarioFinal: string | undefined,
    tempoTotal: string | undefined
  ) => void;
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
  onVariablesChange,
}: Props) {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const totalTime = calculateTotalTime(startTime, endTime);
  const [range, setRange] = React.useState<DateRange | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(
    null
  );

  let formatter;
  formatoAno
    ? (formatter = useDateFormatter({
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        // dateStyle: "full",
      }))
    : (formatter = useDateFormatter({
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        // dateStyle: "full",
      }));

  function formatarData(data: string) {
    const dia = data.substring(0, 2);
    const mes = data.substring(3, 5);
    const ano = data.substring(6, data.length);

    if (formatoData == "d/m") {
      return `${dia}/${mes}/${ano}`;
    } else if (formatoData == "m/d") {
      return `${mes}/${dia}/${ano}`;
    }
  }

  let dataSelecionada: string | undefined;
  let dataInicial: string | undefined;
  let dataFinal: string | undefined;
  let horarioInicial: string | undefined;
  let horarioFinal: string | undefined;
  let tempoTotal: string | undefined;

  if (selectedDate) {
    dataSelecionada = formatarData(
      formatter.format(selectedDate.toDate(getLocalTimeZone()))
    );
  }
  if (range) {
    dataInicial = formatarData(
      formatter.format(range.start.toDate(getLocalTimeZone()))
    );
    dataFinal = formatarData(
      formatter.format(range.end.toDate(getLocalTimeZone()))
    );
  }

  if (startTime) {
    horarioInicial = startTime;
    horarioFinal = endTime;
    tempoTotal = totalTime;
  }

  useEffect(() => {
    onVariablesChange(
      dataSelecionada,
      dataInicial,
      dataFinal,
      horarioInicial,
      horarioFinal,
      tempoTotal
    );
  }, [
    dataSelecionada,
    dataInicial,
    dataFinal,
    horarioInicial,
    horarioFinal,
    tempoTotal,
    onVariablesChange,
  ]);

  return (
    <>
      {useHorario ? (
        <div className={`flex gap-1 text-white`}>
          <input
            type="time"
            min="00:00"
            max="23:59"
            className={`w-18 items-center p-1 rounded bg-[#1d272c]`}
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
            className={`w-18 items-center p-1 rounded bg-[#1d272c]`}
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
            <CalendarIcon width="28" height="28" className="text-white" />
          </a>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content style={{ filter: "drop-shadow(0 0 1px white)" }}>
            {useRange ? (
              <>
                <I18nProvider locale="br-BR">
                  <RangeCalendar
                    className={`flex flex-col rounded-[12px] px-3 py-1 bg-[#12191d] text-white`}
                    value={range}
                    onChange={setRange}
                  >
                    <header className="flex m-2 justify-center items-center">
                      <Button
                        slot="previous"
                        className={`m-2 p-1 rounded absolute left-1 button`}
                      >
                        <ChevronLeftIcon width="22" height="22" />
                      </Button>
                      <Heading className="m-2 first-letter:uppercase" />
                      <Button
                        slot="next"
                        className={`m-2 p-1 rounded absolute right-1 button`}
                      >
                        <ChevronRightIcon width="22" height="22" />
                      </Button>
                    </header>
                    <CalendarGrid>
                      {(date) => (
                        <CalendarCell
                          date={date}
                          className={`${
                            isToday(date, "America/Sao_Paulo")
                              ? `bg-[#1d272c]`
                              : ""
                          } rounded px-2 py-[4px] flex flex-col justify-center items-center rangeCalendarCell`}
                        />
                      )}
                    </CalendarGrid>
                  </RangeCalendar>
                </I18nProvider>
              </>
            ) : (
              <>
                <I18nProvider locale="br-BR">
                  <Calendar
                    className={`flex flex-col rounded-[12px] px-3 py-1 bg-[#12191d] text-white`}
                    value={selectedDate}
                    onChange={setSelectedDate}
                  >
                    <header className="flex m-2 justify-center items-center">
                      <Button
                        slot="previous"
                        className={`m-2 p-1 rounded absolute left-1 button`}
                      >
                        <ChevronLeftIcon width="22" height="22" />
                      </Button>
                      <Heading className="m-2 first-letter:uppercase" />
                      <Button
                        slot="next"
                        className={`m-2 p-1 rounded absolute right-1 button`}
                      >
                        <ChevronRightIcon width="22" height="22" />
                      </Button>
                    </header>
                    <CalendarGrid>
                      {(data) => (
                        <CalendarCell
                          date={data}
                          className={`${
                            isToday(data, "America/Sao_Paulo")
                              ? `bg-[#1d272c]`
                              : ""
                          } rounded px-2 py-[4px] flex flex-col justify-center items-center calendarCell`}
                        />
                      )}
                    </CalendarGrid>
                  </Calendar>
                </I18nProvider>
              </>
            )}
            <Popover.Arrow width="12" height="6" className="popoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
