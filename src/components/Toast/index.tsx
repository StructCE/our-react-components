// {FEITO Cor do component}, {FEITO título} e {FEITO texto do campo}
// Extras:
// FEITO Posição
// FEITO Botão de dispensar a toast

import { useState } from "react";

type ToastProps = {
  title: string;
  message: string;
  position: "top" | "bottom" | "topr" | "topl" | "botr" | "botl";
  color: "light" | "dark" | "slate" | "red" | "blue";
  tailwind?: string;
};

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  position,
  color,
  tailwind,
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleToastClick = () => {
    // Ao clicar no botão, mostra Toast:
    setShowToast(true);
    // Após 3 segundos, fecha Toast:
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000); // Fecha após 5 segundos
    return () => clearTimeout(timer);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  // Adiciona opções para a posição da Toast:
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

  // Adiciona opções para a cor da Toast:
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
    <div>
      <button
        onClick={handleToastClick}
        className={`close-button ${tailwind || ""}`}
      >
        Show Toast
      </button>
      {showToast && (
        <div
          className={`fixed ${positionClass(position)} ${backgroundColor(
            color
          )} duration-200 w-60 border-2 border-slate-500 p-3 rounded-md`}
        >
          <div className="grid grid-cols-2 justify-items-center">
            <strong className="mr-auto">{title}</strong>
            <button
              onClick={handleCloseToast}
              className="justify-self-end px-2"
            >
              X
            </button>
          </div>
          <div>{message}</div>
        </div>
      )}
    </div>
  );
};

export default Toast;
