// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { CodeLayout } from "./styles";
import { getWebContainerInstance } from "./webcontainer";
import { files } from "./files";

export function WebContainerExample() {
  const initialCode = ``;

  const [code, setCode] = useState(initialCode);
  const [file, setFile] = useState();

  async function handleRun() {
    const webContainer = await getWebContainerInstance();

    await webContainer.mount({
      ...files,
      "index.js": {
        file: {
          contents: code,
        },
      },
    });

    const packageJSON = await webContainer.fs.readFile("index.js", "utf-8");
    setFile(packageJSON);
  }
  return (
    <>
      <div />
      <CodeLayout>
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
        <p>{file}</p>
      </CodeLayout>
    </>
  );
}
