import { useState } from "react";
import { Alert, AlertCall } from "..";

export function AlertExample2() {
  const [isManagingAlertCall, setIsManagingAlertCall] = useState(true);
  const [responseForAlertCall, setResponseForAlertCall] = useState(false);
  const [responseForAlertComponent, setResponseForAlertComponent] =
    useState(false);

  const handleClick = async () => {
    setResponseForAlertCall(await AlertCall());
  };

  return (
    <>
      <h1>Escolha seu alert</h1>

      <section>
        <div>
          <button type="button" onClick={() => setIsManagingAlertCall(true)}>
            Função alert
          </button>
          <button type="button" onClick={() => setIsManagingAlertCall(false)}>
            Componente alert
          </button>
        </div>

        {isManagingAlertCall ? (
          <>
            <h2>
              Clique no botão para chamar a função Alert e o status reagir
            </h2>

            <button type="button" onClick={handleClick}>
              Emitir status
            </button>

            {responseForAlertCall ? (
              <span>Confirmado</span>
            ) : (
              <span>Cancelado</span>
            )}
          </>
        ) : (
          <>
            <h2>
              Clique no botão para dar display no componente Alert e o status
              reagir
            </h2>

            <Alert
              onConfirm={() => setResponseForAlertComponent(true)}
              onCancel={() => setResponseForAlertComponent(false)}
            >
              <button type="button">Emitir status</button>
            </Alert>

            {responseForAlertComponent ? (
              <span>Confirmado</span>
            ) : (
              <span>Cancelado</span>
            )}
          </>
        )}
      </section>
    </>
  );
}
