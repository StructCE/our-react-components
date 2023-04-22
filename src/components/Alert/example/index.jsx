/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Alert } from "..";

export function AlertExample() {
  function onConfirm() {
    console.log("confirmado");
  }

  return (
    <Alert
      title="Teste de alerta"
      confirmText="Confirmar"
      cancelText="Cancelar"
      onConfirm={onConfirm}
    >
      <button type="button">Emitir Alerta!!</button>
    </Alert>
  );
}
