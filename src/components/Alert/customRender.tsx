import React from "react";
import ReactDOM from "react-dom/client";

// Essa função faz com que seja renderizado um componente por meio de uma chamada de função
// em vez de chamá-lo como uma tag

const elemento = document.createElement("div");
let alertRoot: ReactDOM.Root | null = null;

export function customRender(children: JSX.Element) {
  // o unmount é realizado para não criar um root em um root já existente
  if (alertRoot) {
    alertRoot.unmount();
  }
  alertRoot = ReactDOM.createRoot(elemento);
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
