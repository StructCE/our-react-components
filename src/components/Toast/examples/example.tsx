/*
Propsta do exemplo: Mostrar Todas as opções de Cor e Posição da Toast, além de que
  é possível adicionar TailwindCSS opcional à Toast, que é um botão.
*/
import Toast from "..";

export function Example() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-40 p-5 justify-center">
      <div className="rounded-lg bg-gray-400 p-2">
        TOP
        <Toast
          title="Um ezemplo"
          message="Ipsim lorem ou algo assim, n sei"
          color="dark"
          position="top"
          tailwind="rounded-lg p-2 bg-gray-700 text-slate-200"
        />
      </div>

      <div className="rounded-lg bg-gray-400 p-2">
        BOTTOM
        <Toast
          title="Um ezemplo"
          message="Ipsim lorem ou algo assim, n sei"
          color="light"
          position="bottom"
          tailwind="rounded-lg p-2 bg-slate-200"
        />
      </div>

      <div className="rounded-lg bg-gray-400 p-2">
        TOP RIGHT
        <Toast
          title="Um ezemplo"
          message="Ipsim lorem ou algo assim, n sei"
          color="blue"
          position="topr"
          tailwind="rounded-lg p-2 bg-blue-500"
        />
      </div>

      <div className="rounded-lg bg-gray-400 p-2">
        TOP LEFT
        <Toast
          title="Um ezemplo"
          message="Ipsim lorem ou algo assim, n sei"
          color="red"
          position="topl"
          tailwind="rounded-lg p-2 bg-red-500"
        />
      </div>

      <div className="rounded-lg bg-gray-400 p-2">
        BOTTOM RIGHT
        <Toast
          title="Um ezemplo"
          message="Ipsim lorem ou algo assim, n sei"
          color="slate"
          position="botr"
          tailwind="rounded-lg p-2 bg-slate-500"
        />
      </div>

      <div className="rounded-lg bg-gray-400 p-2">
        BOTTOM LEFT
        <Toast
          title="Um ezemplo"
          message="Ipsim lorem ou algo assim, n sei"
          color="dark"
          position="botl"
          tailwind="rounded-lg p-2 bg-gray-700 text-slate-200"
        />
      </div>
    </div>
  );
}
