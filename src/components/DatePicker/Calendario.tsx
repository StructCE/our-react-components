/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getLocalTimeZone, isToday } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { I18nProvider } from "@react-aria/i18n";
import React from "react";
import { useDateFormatter } from "react-aria";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
  type DateValue,
} from "react-aria-components";
import "./DatePicker.css";

type Props = {
  useHorario: boolean;
  formatoData: string;
  formatoAno: boolean;
  corfundo: string;
  cortexto: string;
  corhover: string;
  corselecionado: string;
  horainicio: string;
  horafim: string;
  tempototal: string;
};

export function Calendario({
  useHorario,
  formatoData,
  formatoAno,
  corfundo,
  cortexto,
  corhover,
  corselecionado,
  horainicio,
  horafim,
  tempototal,
}: Props) {
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

  return (
    <I18nProvider locale="br-BR">
      <Calendar
        className={`flex flex-col rounded-[12px] px-3 py-1 text-${cortexto}`}
        style={{ backgroundColor: corfundo }}
        value={selectedDate}
        onChange={setSelectedDate}
      >
        <header className="flex m-2 justify-center items-center">
          <Button
            slot="previous"
            className={`m-2 p-1 rounded absolute left-1 hover:bg-[${corhover}]`}
          >
            <ChevronLeftIcon width="22" height="22" />
          </Button>
          <Heading className="m-2 first-letter:uppercase" />
          <Button
            slot="next"
            className={`m-2 p-1 rounded absolute right-1 hover:bg-[${corhover}]`}
          >
            <ChevronRightIcon width="22" height="22" />
          </Button>
        </header>
        <CalendarGrid>
          {(data) => (
            <CalendarCell
              date={data}
              className={`${
                isToday(data, "America/Sao_Paulo") ? `bg-[#1d272c]` : ""
              } ${
                data
                  ? `focus:bg-[${corselecionado}] hover:bg-[${corhover}]`
                  : ""
              } calendarCell rounded px-2 py-[4px] flex flex-col justify-center items-center `}
            />
          )}
        </CalendarGrid>
        {selectedDate ? (
          <>
            <p>
              {`Data: ${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                selectedDate
                  ? formatarData(
                      formatter.format(selectedDate.toDate(getLocalTimeZone()))
                    )
                  : ""
              }`}
            </p>
            {useHorario ? (
              <>
                <p>{`Hora Inicial: ${horainicio}`}</p>
                <p>{`Hora Final: ${horafim}`}</p>
                <p>{`Tempo Total: ${tempototal}`}</p>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </Calendar>
    </I18nProvider>
  );
}
