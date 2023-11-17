import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from "react-aria-components";

type Props = {
  corfundo: string;
  cortexto: string;
  corhover: string;
  corselecionado: string;
};

export function DatePicker({
  corfundo,
  cortexto,
  corhover,
  corselecionado,
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
          <Calendar
            className={`flex flex-col rounded-md px-3 py-1 text-${cortexto}`}
            style={{ backgroundColor: corfundo }}
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
                  className={`focus:bg-[${corselecionado}] hover:bg-[${corhover}] rounded px-2 py-[4px] flex flex-col justify-center items-center`}
                />
              )}
            </CalendarGrid>
          </Calendar>
          <Popover.Arrow fill={corfundo} width="12" height="6" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
