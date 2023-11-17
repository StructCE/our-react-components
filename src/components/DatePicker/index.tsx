import { CalendarIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React from "react";

type Props = {
  bgcolor: string;
};

export function DatePicker({ bgcolor }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button>
          <CalendarIcon width="32" height="32" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <div
            style={{
              backgroundColor: bgcolor,
              width: "400px",
              height: "400px",
              borderRadius: "8px",
            }}
          ></div>
          <Popover.Arrow fill={bgcolor} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
