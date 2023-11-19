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
  corfundo: string;
  cortexto: string;
  corhover: string;
  corselecionado: string;
  horainicio: string;
  horafim: string;
  formato: string;
};

export function Calendario({
  corfundo,
  cortexto,
  corhover,
  corselecionado,
  horainicio,
  horafim,
  formato,
}: Props) {
  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(
    null
  );
  const formatter = useDateFormatter({
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  function formatarData(data: string) {
    const dia = data.substring(0, 2);
    const mes = data.substring(3, 5);
    const ano = data.substring(6, data.length);

    if (formato == "d/m/a") {
      return `${dia}/${mes}/${ano}`;
    } else if (formato == "m/d/a") {
      return `${mes}/${dia}/${ano}`;
    }
  }

  const corFundo = corfundo;
  const corTexto = cortexto;
  const corHover = corhover;
  const corSelecionado = corselecionado;

  return (
    <I18nProvider locale="en-US">
      <Calendar
        className={`flex flex-col rounded-md px-3 py-1 text-${corTexto}`}
        style={{ backgroundColor: corFundo }}
        value={selectedDate}
        onChange={setSelectedDate}
      >
        <header className="flex m-2 justify-center items-center">
          <Button
            slot="previous"
            className={`m-2 p-1 rounded absolute left-1 hover:bg-[${corHover}]`}
          >
            <ChevronLeftIcon width="22" height="22" />
          </Button>
          <Heading className="m-2 first-letter:uppercase" />
          <Button
            slot="next"
            className={`m-2 p-1 rounded absolute right-1 hover:bg-[${corHover}]`}
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
                  ? `focus:bg-[${corSelecionado}] hover:bg-[${corHover}]`
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
            <p>{`Hora Início: ${horainicio}`}</p>
            <p>{`Hora Fim: ${horafim}`}</p>
          </>
        ) : (
          <></>
        )}
      </Calendar>
    </I18nProvider>
  );
}
// 25/12/2023
// 0123456789
