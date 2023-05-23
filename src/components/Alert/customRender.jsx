import React from "react";
import ReactDOM from "react-dom/client";

const elemento = document.createElement("div");
let alertRoot = null;

// Essa função faz com que seja renderizado um componente por meio de uma chamada de função
// em vez de chamá-lo como uma tag

export function customRender(children) {
  // o unmount é realizado para não criar um root em um root já existente
  if (alertRoot) {
    alertRoot.unmount();
  }
  alertRoot = ReactDOM.createRoot(elemento);
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
