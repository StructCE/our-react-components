// dialog from: https://www.radix-ui.com/docs/primitives/components/dialog

// Forma de uso:
// -> Chame a função Modal e, se necessário, seus derivados (Modal.Close,
// Modal.Trigger, etc);
// -> Agora basta estilizar o modal do seu jeito.

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay } from "./styles";

type ModalProps = {
  children?: JSX.Element;
};

export const Modal = {
  Content: React.forwardRef<HTMLInputElement>(
    ({ children, ...props }: ModalProps, forwardedRef) => (
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogContent {...props} ref={forwardedRef}>
          {children}
        </DialogContent>
      </DialogPrimitive.Portal>
    )
  ),
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Close: DialogPrimitive.Close,
};
