// {FEITO Cor do component}, {FEITO título} e {FEITO texto do campo}
// Extras:
// FEITO Posição
// FEITO Botão de dispensar a toast

import React, { useEffect } from "react";

type ToastProps = {
  title: string;
  message: string;
  show: boolean;
  position: "top" | "bottom" | "topr" | "topl" | "botr" | "botl";
  color: "light" | "dark" | "slate" | "red" | "blue";
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  show,
  position,
  color,
  onClose,
}) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 30000); // Fecha após 3 segundos
    return () => clearTimeout(timer); // Botão de fechar
  }, [onClose, show]);

  const positionClass = (position: string) => {
    switch (position) {
      case "top":
        return "top-1 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "bottom-1 left-1/2 transform origin-bottom -translate-x-1/2";
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

  const backgroundColor = (color: string) => {
    switch (color) {
      case "light":
        return "bg-slate-200";
      case "dark":
        return "bg-gray-700 text-slate-200";
      case "slate":
        return "bg-slate-500";
      case "red":
        return "bg-red-500";
      case "blue":
        return "bg-blue-500";
      default:
        return "bg-slate-500 text-gray-900";
    }
  };

  return (
    <div
      className={`fixed ${positionClass(position)} ${backgroundColor(
        color
      )} duration-200 w-60 border-2 border-slate-500 p-3 rounded-md ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } `}
    >
      <div className="grid grid-cols-2 justify-items-center">
        <h2 className="font-semibold"> {title} </h2>
        <button className="justify-self-end pr-2" onClick={onClose}>
          X
        </button>
      </div>
      {message}
    </div>
  );
};

export default Toast;
