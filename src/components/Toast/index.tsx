// Cor do component, título e texto do campo
// Extra: posição

// EMBAIXO : fixed bottom-1 left-1/2 transform -translate-x-1/2
// TOPO    : fixed top-1 left-1/2 transform -translate-x-1/2
// SUP ESQ : fixed top-0 left-0
// SUP DIR : fixed top-0 right-0
// INF ESQ : fixed bottom-0 left-0
// INF DIR : fixed bottom-0 right-0

import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(onClose, 3000); // Feche o Toast após 3 segundos (3000 ms)
      return () => clearTimeout(timeoutId);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-md ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
