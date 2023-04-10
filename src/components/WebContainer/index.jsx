// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { FormCodeLayout } from "./styles";
import { getWebContainerInstance } from "./webcontainer";

export function WebContainerExample() {
  const initialCode = `console.log("ola")`;

  const [code, setCode] = useState(initialCode);

  async function handleRun() {
    const webContainer = await getWebContainerInstance();

    await webContainer.mount({
      "form.js": {
        file: {
          contents: code,
        },
      },
      "package.json": {
        file: {
          contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
            },
            "scripts": {
              "start": "node form.js"
            }
          }      
          `.trim(),
        },
      },
    });

    const install = await webContainer.spawn("yarn", []);

    await install.exit;

    const start = await webContainer.spawn("yarn", ["start"]);

    start.output.pipeTo(
      new WritableStream({
        write(data) {
          // eslint-disable-next-line no-console
          console.log(data);
        },
      })
    );
  }

  return (
    <>
      <div />
      <FormCodeLayout>
        <h1>Seu código</h1>
        <Editor
          height="50vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value)}
        />
        <button type="button" onClick={() => handleRun()}>
          Run
        </button>
      </FormCodeLayout>
    </>
  );
}
