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

  async function handleWebContainerStart() {
    const webContainer = await getWebContainerInstance();

    webContainer.mount(files);

    startWebContainerServer(webContainer);

    webContainer.on("server-ready", (port, url) => setContainerUrl(url));
  }

  async function handleWebContainerEdit() {
    const webContainer = await getWebContainerInstance();

    await webContainer.fs.writeFile(
      "/src/App.jsx",
      `
        import { useState } from 'react'
        import { FormFactory } from "./component"

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
          EDIT
        </button>
      </CodeLayout>
      <button type="button" onClick={handleWebContainerStart}>
        START
      </button>
      <iframe title="qqer coisa" src={containerUrl} />
    </div>
  );
}
