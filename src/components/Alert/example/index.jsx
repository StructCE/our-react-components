import { useState } from "react";
import { AlertCall } from "..";

export function AlertExample() {
  const [valid, setValid] = useState(false);

  return (
    <>
      <h1>Testando funcionamento da função AlertCall</h1>

      <button type="button" onClick={async () => setValid(await AlertCall())}>
        chamar alert
      </button>

      <span>{(valid && "true") || "false"}</span>
    </>
  );
}
