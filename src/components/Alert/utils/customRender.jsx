import React from "react";
import ReactDOM from "react-dom/client";

const elemento = document.createElement("div");

export function customRender(children) {
  const alertRoot = ReactDOM.createRoot(elemento);
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
