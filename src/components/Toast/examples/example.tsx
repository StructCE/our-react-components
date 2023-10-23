import React, { useState } from "react";
import Toast from "../index";

const ExampleToast: React.FC = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [showToast, setShowToast] = useState(false);

  const mostraToast = (title: string, message: string) => {
    setToastTitle(title);
    setToastMessage(message);
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      {/* Botão para exibir o Toast */}
      <button
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-rose-500 rounded-full p-2"
        onClick={() => mostraToast("O que é isso?", "Isso é um Toast!")}
      >
        Click me UwU
      </button>

      {/* Renderize o Toast condicionalmente com base no estado showToast */}
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="topr"
        onClose={closeToast}
      />
    </div>
  );
};

export default ExampleToast;
