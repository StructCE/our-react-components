/* eslint-disable no-alert */
/* eslint-disable no-console */
// import { useState } from "react";
import { useState } from "react";
import { Alert, AlertCall } from "..";

export function AlertExample() {
  const [sla, setSla] = useState(false);

  function onConfirm() {
    console.log("confirmado");
  }

  AlertCall({
    cancelText: "cancelar",
    confirmText: "confirmar",
    onConfirm,
    conditionToOpen: sla,
  });

  return (
    <>
      <h1>Seu alert</h1>
      <Alert
        title="Teste de alerta"
        confirmText="Confirmar"
        cancelText="Cancelar"
        onConfirm={onConfirm}
      >
        <button type="button">Mostrar Alert</button>
      </Alert>
      <button type="button" onClick={() => setSla(true)}>
        Mostrar AlertCall
      </button>
    </>
  );
}
