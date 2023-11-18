import { getLocalTimeZone } from "@internationalized/date";
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

type Props = {
  corfundo: string;
  cortexto: string;
  corhover: string;
  corselecionado: string;
};

export function Calendario({
  corfundo,
  cortexto,
  corhover,
  corselecionado,
}: Props) {
  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(
    null
  );
  const formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <I18nProvider locale="br-BR">
      <Calendar
        className={`flex flex-col rounded-md px-3 py-1 text-${cortexto}`}
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
              className={`focus:bg-[${corselecionado}] hover:bg-[${corhover}] rounded px-2 py-[4px] flex flex-col justify-center items-center`}
            />
          )}
        </CalendarGrid>
        <p>
          Data:{" "}
          {selectedDate
            ? formatter.format(selectedDate.toDate(getLocalTimeZone()))
            : ""}
        </p>
      </Calendar>
    </I18nProvider>
  );
}
