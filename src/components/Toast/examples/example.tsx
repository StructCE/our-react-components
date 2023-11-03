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
        className="fixed top-1/2 left-1/2 bg-rose-500 rounded-full p-2 hover:scale-105 duration-150"
        onClick={() => mostraToast("O que é isso?", "Isso é um Toast!")}
      >
        Show All Toasts
      </button>

      {/* Renderize o Toast condicionalmente com base no estado showToast */}
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="topr"
        color="light"
        onClose={closeToast}
      />
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="topl"
        color="dark"
        onClose={closeToast}
      />
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="top"
        color="slate"
        onClose={closeToast}
      />
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="botr"
        color="blue"
        onClose={closeToast}
      />
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="botl"
        color="red"
        onClose={closeToast}
      />
      <Toast
        title={toastTitle}
        message={toastMessage}
        show={showToast}
        position="bottom"
        color="dark"
        onClose={closeToast}
      />
    </div>
  );
};

export default ExampleToast;
