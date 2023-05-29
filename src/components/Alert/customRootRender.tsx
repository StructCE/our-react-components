import React from "react";
import ReactDOM from "react-dom/client";

// Essa função faz com que seja renderizado um componente por meio de uma chamada de função
// em vez de chamá-lo como uma tag

const newDivElement = document.createElement("div");
let alertRoot: ReactDOM.Root | null = null;

export function customRootRender(children: JSX.Element) {
  // o unmount é realizado para não criar um root em um root já existente
  if (alertRoot) {
    alertRoot.unmount();
  }
  alertRoot = ReactDOM.createRoot(newDivElement);
  alertRoot.render(<React.StrictMode>{children}</React.StrictMode>);
}
