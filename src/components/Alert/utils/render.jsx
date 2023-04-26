import React from "react";
import ReactDOM from "react-dom/client";

const alertRoot = ReactDOM.createRoot(document.getElementById("alert"));

export function render(children) {
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
