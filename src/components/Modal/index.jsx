import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay } from "./styles";

export const Modal = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogContent {...props} ref={forwardedRef}>
        {children}
      </DialogContent>
    </DialogPrimitive.Portal>
  )
);

Modal.Root = DialogPrimitive.Root;
Modal.Trigger = DialogPrimitive.Trigger;
Modal.Close = DialogPrimitive.Close;
// Tirei o close do corpo do Modal por querer chamá-lo duas
// vezes dentro do exemplo e porque acho que nao vou utilizá-lo no segundo;
// Consigo colocar "type='submit" e "aria-label='Close" ??
