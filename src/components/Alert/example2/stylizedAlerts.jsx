import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRender } from "../utils/customRender";

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
        <AlertDialog.Overlay className="fixed inset-0 bg-black/60" />
        <AlertDialog.Content className="fixed inset-0 flex justify-center items-center">
          <div className="relative flex flex-col items-center p-2 text-md text-white/80 font-medium rounded-lg bg-gradient-to-t from-gray-950 to-gray-900 border-b-2 border-cyan-600">
            <h1 className="mt-2 mb-0 pb-4 px-6 text-xl border-b-2 border-white">
              {title}
            </h1>
            <p className="font-normal">{content}</p>
            <div className="mx-auto mt-2">
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  onClick={onCancel}
                  className="mx-8 my-4 hover:text-cyan-600 transition-all ease-linear px-2"
                >
                  {cancelText || "cancelar"}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  onClick={onConfirm}
                  className="mx-8 my-4 hover:text-cyan-600 transition-all ease-linear px-2"
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
