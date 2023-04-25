// Forma de uso:
// -> Chame a função Modal e, se necessário, seus derivados (Modal.Close,
// Modal.Trigger, etc);
// -> Agora basta estilizar o modal do seu jeito.
import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay } from "./styles";

export const Modal = React.forwardRef(
  // Contém o layout e o conteúdo renderizados quando abre-se o modal
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogContent {...props} ref={forwardedRef}>
        {children}
      </DialogContent>
    </DialogPrimitive.Portal>
  )
);

Modal.Root = DialogPrimitive.Root; // Contém todas partes do modal
Modal.Trigger = DialogPrimitive.Trigger; // Abre o modal
Modal.Close = DialogPrimitive.Close; // Fecha o modal
