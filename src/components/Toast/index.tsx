// Cor do component, {FEITO título} e {FEITO texto do campo}
// Extras:
// FEITO Posição
// Botão de dispensar a toast

import React, { useEffect } from "react";

interface ToastProps {
  title: string;
  message: string;
  show: boolean;
  position: "top" | "bottom" | "topr" | "topl" | "botr" | "botl";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  show,
  position,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(onClose, 3000); // Feche o Toast após 3 segundos (3000 ms)
      return () => clearTimeout(timeoutId);
    }
  }, [show, onClose]);

  const positionClass = (position: string) => {
    switch (position) {
      case "top":
        return "top-1 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "bottom-1 left-1/2 transform -translate-x-1/2";
      case "topr":
        return "top-1 right-1";
      case "topl":
        return "top-1 left-1";
      case "botr":
        return "bottom-1 right-1";
      case "botl":
        return "bottom-1 left-1";
      default:
        return "top-1 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div
      className={`fixed ${positionClass(
        position
      )} bg-gray-600 text-white p-3 rounded-md ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h2 className="text-cyan-400"> {title} </h2>
      {message}
    </div>
  );
};

export default Toast;
