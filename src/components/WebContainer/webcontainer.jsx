import { WebContainer } from "@webcontainer/api";

let webcontainerInstance = null;

async function getWebContainerInstance() {
  if (!webcontainerInstance) {
    webcontainerInstance = await WebContainer.boot();
  }

  return webcontainerInstance;
}

async function startWebContainerServer(wbcInst) {
  await wbcInst.spawn("npm", ["install", "yarn"]);
  const installProcess = await wbcInst.spawn("yarn", ["install"]);

  const installExitCode = await installProcess.exit;

  if (installExitCode !== 0) {
    throw new Error("Unable to run yarn install");
  }

  // `yarn dev`
  await wbcInst.spawn("yarn", ["dev"]);
}

export { getWebContainerInstance, startWebContainerServer };
