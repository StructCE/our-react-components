import React, { useState } from "react";
import Toast from "../index";

const ExampleToast: React.FC = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const mostraToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      {/* Botão para exibir o Toast */}
      <button onClick={() => mostraToast("Isso é um Toast!")}>
        Exibir Toast
      </button>

      {/* Renderize o Toast condicionalmente com base no estado showToast */}
      <Toast message={toastMessage} show={showToast} onClose={closeToast} />
    </div>
  );
};

export default ExampleToast;
