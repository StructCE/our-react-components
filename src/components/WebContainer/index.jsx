import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { files } from "./files";
import { CodeLayout } from "./styles";
import {
  getWebContainerInstance,
  startWebContainerServer,
} from "./webcontainer";

export function WebContainerExample() {
  const [containerUrl, setContainerUrl] = useState("");
  const [code, setCode] = useState("");
  const [isStarting, setIsStarting] = useState(false);

  async function handleWebContainerStart() {
    setIsStarting(true);
    const webContainer = await getWebContainerInstance();

    webContainer.mount(files);

    startWebContainerServer(webContainer);

    webContainer.on("server-ready", (port, url) => {
      setContainerUrl(url);
      setIsStarting(false);
    });
  }

  async function handleWebContainerEdit() {
    const webContainer = await getWebContainerInstance();

    await webContainer.fs.writeFile(
      "/src/App.jsx",
      `
        import { useState, useEffect } from 'react'
        import Component from "./component"

        function App() {
        ${code}
        }

        export default App
      `.trim()
    );
  }

  return (
    <div>
      <CodeLayout>
        <h1>Seu código</h1>
        <Editor
          height="50vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value)}
        />
        <button type="button" onClick={handleWebContainerEdit}>
          Apply code
        </button>
        <button type="button" onClick={handleWebContainerStart}>
          {isStarting ? "Loading..." : "Start"}
        </button>
      </CodeLayout>
      <iframe title="qqer coisa" src={containerUrl} />
    </div>
  );
}
