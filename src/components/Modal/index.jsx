// your-dialog.jsx
import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const ModalContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...props} ref={forwardedRef}>
        {children}
        <DialogPrimitive.Close aria-label="Close" />
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
