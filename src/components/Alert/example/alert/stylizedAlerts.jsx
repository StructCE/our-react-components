import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRender } from "./customRender";

function Alert({
  title,
  content,
  cancelText,
  onCancel,
  confirmText,
  onConfirm,
  children,
  conditionToOpen = true,
  defaultOpen,
}) {
  return (
    <AlertDialog.Root defaultOpen={defaultOpen}>
      {conditionToOpen ? (
        <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      ) : (
        children
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="fixed inset-0 flex justify-center items-center">
          <div className="text-amber-950 relative flex flex-col items-center bg-slate-50 w-96 h-48 border-t-4 border-t-red-700 rounded-md">
            <h1 className="font-bold text-xl mt-2">{title}</h1>
            <p className="italic">{content}</p>
            <div className="mt-10 w-56 flex justify-between">
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  onClick={onCancel}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {cancelText || "cancelar"}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  onClick={onConfirm}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {confirmText || "confirmar"}
                </button>
              </AlertDialog.Action>
            </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

async function AlertCall(attributes) {
  let value = null;
  const operation = new Promise((resolve) => {
    customRender(
      <Alert
        defaultOpen
        onCancel={() => {
          resolve(false);
        }}
        onConfirm={() => {
          resolve(true);
        }}
        {...attributes}
      />
    );
  });
  await operation.then((data) => {
    value = data;
  });

  return value;
}

export { Alert, AlertCall };
