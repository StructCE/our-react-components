/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Alert, AlertCall } from "..";

export function AlertExample() {
  function onConfirm() {
    console.log("confirmado");
  }

  AlertCall({
    cancelText: "cancelar",
    confirmText: "confirmar",
    onConfirm,
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
        <button type="button">Emitir Alerta!!</button>
      </Alert>
    </>
  );
}
