// dialog from: https://www.radix-ui.com/docs/primitives/components/dialog

// Forma de uso:
// -> Chame a função Modal e, se necessário, seus derivados (Modal.Close,
// Modal.Trigger, etc);
// -> Agora basta estilizar o modal do seu jeito.

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styles from "./styles.module.css";
import { cn } from "~/lib/utils";

export const Modal = {
  Content: React.forwardRef(
    (
      {
        children,
        className,
        ...props
      }: React.PropsWithChildren<
        DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>
      >,
      forwardedRef: React.Ref<HTMLDivElement>
    ) => (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="inset-0 h-screen w-screen fixed bg-gradient-to-t from-black/40 to-gray-400/40 transition-opacity" />
        <DialogPrimitive.Content
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            styles["dialog-content-animation"],
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  ),
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Close: DialogPrimitive.Close,
};
