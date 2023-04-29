import React from "react";
import ReactDOM from "react-dom/client";

export async function customRender(children) {
  const alertRoot = ReactDOM.createRoot(document.getElementById("alert"));
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
