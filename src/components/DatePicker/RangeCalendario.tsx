import { getLocalTimeZone, isToday } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { I18nProvider } from "@react-aria/i18n";
import React from "react";
import { useDateFormatter } from "react-aria";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  RangeCalendar,
  type DateRange,
} from "react-aria-components";
import "./DatePicker.css";

type Props = {
  useHorario: boolean;
  formatoData: string;
  formatoAno: boolean;
  horainicio: string;
  horafim: string;
  tempototal: string;
};

export function RangeCalendario({
  useHorario,
  formatoData,
  formatoAno,
  horainicio,
  horafim,
  tempototal,
}: Props) {
  const [range, setRange] = React.useState<DateRange | null>(null);
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
      <RangeCalendar
        className={`flex flex-col rounded-[12px] px-3 py-1 calendar`}
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
                isToday(date, "America/Sao_Paulo") ? `calendarCellToday` : ""
              } rounded px-2 py-[4px] flex flex-col justify-center items-center rangeCalendarCell`}
            />
          )}
        </CalendarGrid>
        {range ? (
          <>
            <p>
              {`Data Inicial: ${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                formatarData(
                  formatter.format(range.start.toDate(getLocalTimeZone()))
                )
              }`}
            </p>
            <p>
              {`Data Final: ${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                formatarData(
                  formatter.format(range.end.toDate(getLocalTimeZone()))
                )
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
      </RangeCalendar>
    </I18nProvider>
  );
}
