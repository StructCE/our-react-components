/*
Essa página consiste numa seção de mostrar o funcionando dos Alerts criados.

Você pode alternar entre ver o alertCall ou o Alert, e é exibido um
bloco de código de como ele está sendo utilizado, ignorando aspectos de
estilização.
*/

import { useState } from "react";
import { Alert, alertCall } from "./alert/stylizedAlerts";

export function AlertExample2() {
  const [isManagingAlertCall, setIsManagingAlertCall] = useState(true);
  const [response, setResponse] = useState<boolean | null>(false);

  async function handleClick() {
    setResponse(
      await alertCall({ title: "Alert", content: "deseja prosseguir?" })
    );
  }

  const linesFunctionCode = [
    "async function handleClick() {",
    "  setResponse(await alertCall());",
    "}",
    "",
    "<button",
    " onClick={() => void handleClick()}",
    ">",
    "  Emitir status",
    "</button>",
  ];

  const linesComponentCode = [
    "<Alert",
    " onConfirm={() => setResponse(true)}",
    " onCancel={() => setResponse(false)}",
    ">",
    "  <button>",
    "    Emitir status",
    "  </button>",
    "</Alert>",
  ];

  return (
    <div className="bg-gradient-to-t from-cyan-950 to-gray-900 h-screen flex justify-center items-center flex-col">
      <section className="w-3/6 bg-gray-900 rounded px-5 py-4 shadow-md text-white border-b-4 border-cyan-500">
        <div>
          <button
            type="button"
            onClick={() => setIsManagingAlertCall(true)}
            className="px-4 py-2 mb-4 mr-2 w-32 justify-center hover:bg-gray-100 border border-gray-200 active:ring-4 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm inline-flex dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            Função Alert
          </button>
          <button
            type="button"
            onClick={() => setIsManagingAlertCall(false)}
            className="px-4 py-2 mb-4 ml-2 w-44 justify-center hover:bg-gray-100 border border-gray-200 active:ring-4 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm inline-flex dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            Componente alert
          </button>
        </div>

        {isManagingAlertCall ? (
          <div className="flex flex-col text-sm font-medium">
            <button
              type="button"
              onClick={() => void handleClick()}
              className="px-4 py-2 mt-4 mb-6 w-32 shadow-md shadow-cyan-800 justify-center hover:bg-cyan-100 border border-cyan-400 font-medium rounded-lg text-sm inline-flex dark:bg-cyan-800 dark:border-cyan-700 dark:text-white dark:hover:bg-cyan-700"
            >
              Emitir status
            </button>

            <span className="text-xl">
              response = {response ? "true" : "false"}
            </span>

            <pre className="mb-4 mt-6 bg-gray-950 p-2 rounded-md border-2 border-cyan-600">
              {linesFunctionCode.join("\n")}
            </pre>
          </div>
        ) : (
          <div className="flex flex-col text-sm font-medium">
            <Alert
              onConfirm={() => setResponse(true)}
              onCancel={() => setResponse(false)}
              title="Alert"
              content="Deseja prosseguir?"
            >
              <button
                type="button"
                className="px-4 py-2 mt-4 mb-6 w-32 shadow-md shadow-cyan-800 justify-center hover:bg-cyan-100 border border-cyan-400 font-medium rounded-lg text-sm inline-flex dark:bg-cyan-800 dark:border-cyan-700 dark:text-white dark:hover:bg-cyan-700"
              >
                Emitir status
              </button>
            </Alert>

            <span className="text-xl">
              response = {response ? "true" : "false"}
            </span>

            <pre className="mb-4 mt-6 bg-gray-950 p-2 rounded-md border-2 border-cyan-600">
              {linesComponentCode.join("\n")}
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}
