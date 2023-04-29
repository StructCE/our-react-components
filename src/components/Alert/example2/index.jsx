import { useState } from "react";
import { Alert } from "..";

export function AlertExample2() {
  const [valid, setValid] = useState(false);

  return (
    <>
      <h1>Testando funcionamento do componente Alert</h1>

      <Alert conditionToOpen={valid}>
        <button type="button">abrir</button>
      </Alert>

      <button type="button" onClick={() => setValid(true)}>
        pode abrir
      </button>
      <span>{(valid && "true") || "false"}</span>
    </>
  );
}
