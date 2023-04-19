import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay } from "./styles";

export const Modal = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogContent {...props} ref={forwardedRef}>
        {children}
        <DialogPrimitive.Close aria-label="Close" type="submit">
          Save
        </DialogPrimitive.Close>
      </DialogContent>
    </DialogPrimitive.Portal>
  )
);

Modal.Root = DialogPrimitive.Root;
Modal.Trigger = DialogPrimitive.Trigger;
