import { WebContainer } from "@webcontainer/api";
import { useState } from "react";
import { files } from "./files";

let webcontainerInstance = null;

async function getWebContainerInstance() {
  if (!webcontainerInstance) {
    webcontainerInstance = await WebContainer.boot();
  }

  return webcontainerInstance;
}

async function startDevServer(wbcInst) {
  await wbcInst.spawn("npm", ["install", "yarn"]);
  const installProcess = await wbcInst.spawn("yarn", ["install"]);

  const installExitCode = await installProcess.exit;

  if (installExitCode !== 0) {
    throw new Error("Unable to run yarn install");
  }

  // `yarn dev`
  await wbcInst.spawn("yarn", ["dev"]);

  const file = await wbcInst.fs.readFile("/main.js", "utf-8");

  // eslint-disable-next-line no-console
  console.log(file);
}

// Call only once

export function WebContainerExample() {
  const [containerUrl, setContainerUrl] = useState("");

  async function handleWebContainerClick() {
    const webContainer = await getWebContainerInstance();

    webContainer.mount(files);

    startDevServer(webContainer);

    webcontainerInstance.on("server-ready", (port, url) =>
      setContainerUrl(url)
    );
  }

  return (
    <div>
      <button type="button" onClick={handleWebContainerClick}>
        START
      </button>
      <iframe title="qqer coisa" src={containerUrl} />
    </div>
  );
}

// // eslint-disable-next-line import/no-extraneous-dependencies
// import { Editor } from "@monaco-editor/react";
// import { useState } from "react";
// import { CodeLayout } from "./styles";
// import { getWebContainerInstance } from "./webcontainer";
// import { files } from "./files";

// export function WebContainerExample() {
//   const initialCode = ``;

//   const [code, setCode] = useState(initialCode);
//   const [file, setFile] = useState();

//   async function handleRun() {
//     const webContainer = await getWebContainerInstance();

//     await webContainer.mount({
//       ...files,
//       "index.js": {
//         file: {
//           contents: code,
//         },
//       },
//     });

//     const packageJSON = await webContainer.fs.readFile("index.js", "utf-8");
//     setFile(packageJSON);
//   }
//   return (
//     <>
//       <div />
//       <CodeLayout>
//         <h1>Seu código</h1>
//         <Editor
//           height="50vh"
//           theme="vs-dark"
//           defaultLanguage="javascript"
//           value={code}
//           onChange={(value) => setCode(value)}
//         />
//         <button type="button" onClick={() => handleRun()}>
//           Run
//         </button>
//         <p>{file}</p>
//       </CodeLayout>
//     </>
//   );
// }
