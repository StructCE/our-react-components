// Cor do component, título e texto do campo
// Extra: posição

// EMBAIXO : bottom-1 left-1/2 transform -translate-x-1/2
// TOPO    : top-1 left-1/2 transform -translate-x-1/2
// SUP ESQ : top-0 left-0
// SUP DIR : top-0 right-0
// INF ESQ : bottom-0 left-0
// INF DIR : bottom-0 right-0

import React, { useEffect } from "react";

// type Position = {
//   top: "bottom-1 left-1/2 transform -translate-x-1/2";
//   bottom: "top-1 left-1/2 transform -translate-x-1/2";
//   topl: "top-0 left-0";
//   topr: "top-0 right-0";
//   botl: "bottom-0 left-0";
//   botr: "bottom-0 right-0";
// };

interface ToastProps {
  message: string;
  show: boolean;
  position: "top" | "bottom" | "topr" | "topl" | "botr" | "botl";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, position, onClose }) => {
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
      <h2 className="text-cyan-400">olamigos</h2>
      {message}
    </div>
  );
};

export default Toast;
