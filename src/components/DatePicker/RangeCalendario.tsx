import { getLocalTimeZone } from "@internationalized/date";
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
  corfundo: string;
  cortexto: string;
  corhover: string;
};

export function RangeCalendario({ corfundo, cortexto, corhover }: Props) {
  const [range, setRange] = React.useState<DateRange | null>(null);
  const formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <I18nProvider locale="br-BR">
      <RangeCalendar
        className={`flex flex-col rounded-md px-3 py-1 text-${cortexto}`}
        style={{ backgroundColor: corfundo }}
        value={range}
        onChange={setRange}
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
          {(date) => (
            <CalendarCell
              date={date}
              className={`rangeCalendarCell px-2 py-[4px] flex flex-col justify-center items-center`}
            />
          )}
        </CalendarGrid>
        {range ? (
          <>
            <p>
              Data Inicio:{" "}
              {formatter.format(range.start.toDate(getLocalTimeZone()))}
            </p>
            <p>
              Data Fim: {formatter.format(range.end.toDate(getLocalTimeZone()))}
            </p>
          </>
        ) : (
          <></>
        )}
      </RangeCalendar>
    </I18nProvider>
  );
}
