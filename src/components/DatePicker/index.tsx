import { getLocalTimeZone } from "@internationalized/date";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { I18nProvider } from "@react-aria/i18n";
import React from "react";
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
import "./DatePicker.css";

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
  const [range, setRange] = React.useState<DateRange | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(
    null
  );
  const formatter = useDateFormatter({ dateStyle: "full" });

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
                      Data Fim:{" "}
                      {formatter.format(range.end.toDate(getLocalTimeZone()))}
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </RangeCalendar>
            </I18nProvider>
          ) : (
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
          )}
          <Popover.Arrow fill={corfundo} width="12" height="6" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
