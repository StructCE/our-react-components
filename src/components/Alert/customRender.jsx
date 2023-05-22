import React from "react";
import ReactDOM from "react-dom/client";

const elemento = document.createElement("div");
let alertRoot = null;

export function customRender(children) {
  if (alertRoot) {
    alertRoot.unmount();
  }
  alertRoot = ReactDOM.createRoot(elemento);
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
