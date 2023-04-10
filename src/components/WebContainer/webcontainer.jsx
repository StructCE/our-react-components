// eslint-disable-next-line import/no-extraneous-dependencies
import { WebContainer } from "@webcontainer/api";

let webContainerInstance;

export async function getWebContainerInstance() {
  if (!webContainerInstance) {
    webContainerInstance = await WebContainer.boot();
  }

  return webContainerInstance;
}
