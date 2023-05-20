// Coloco o ModalStyled aqui ? Utilizei nos dois exemplos
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(DialogPrimitive.Overlay)`
  position: absolute;
  background: radial-gradient(rgba(100, 100, 100, 0.4), rgba(0, 0, 0, 0.4));
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DialogContent = styled(DialogPrimitive.Content)`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;
