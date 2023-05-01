// dialog from: https://www.radix-ui.com/docs/primitives/components/dialog

// Forma de uso:
// -> Chame a função Modal e, se necessário, seus derivados (Modal.Close,
// Modal.Trigger, etc);
// -> Agora basta estilizar o modal do seu jeito.

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
