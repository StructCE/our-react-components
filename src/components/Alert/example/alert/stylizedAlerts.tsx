import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRootRender } from "./customRootRender";

type alertCallProps = {
  title: string | JSX.Element;
  content: string;
  cancelText?: string;
  confirmText?: string;
  canOpen?: boolean;
};

type alertProps = alertCallProps & {
  onCancel?: () => void;
  onConfirm?: () => void;
  children?: JSX.Element;
  defaultOpen?: boolean;
};

function Alert({
  title,
  content,
  cancelText = "Cancelar",
  onCancel,
  confirmText = "Confirmar",
  onConfirm,
  children,
  defaultOpen,
  canOpen = true,
}: alertProps) {
  return (
    <AlertDialog.Root defaultOpen={defaultOpen}>
      {canOpen ? (
        <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      ) : (
        children
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content
          className="fixed inset-0 flex justify-center items-center mx-2"
          onEscapeKeyDown={onCancel}
        >
          <div className="text-amber-950 relative flex flex-col items-center bg-slate-50 w-96 h-48 border-t-4 border-t-red-700 rounded-md">
            <AlertDialog.Title className="font-bold text-xl mt-2">
              {title}
            </AlertDialog.Title>
            <AlertDialog.Description className="italic">
              {content}
            </AlertDialog.Description>
            <div className="mt-10 w-56 flex justify-between">
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  onClick={onCancel}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {cancelText}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  onClick={onConfirm}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {confirmText}
                </button>
              </AlertDialog.Action>
            </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

async function alertCall({
  title,
  content,
  cancelText = "Cancelar",
  confirmText = "Confirmar",
}: alertCallProps) {
  const operation = new Promise((resolve) => {
    customRootRender(
      <Alert
        defaultOpen
        onCancel={() => {
          resolve(false);
        }}
        onConfirm={() => {
          resolve(true);
        }}
        title={title}
        content={content}
        cancelText={cancelText}
        confirmText={confirmText}
      />
    );
  });

  let value = null;
  await operation.then((data) => {
    value = data;
  });

  return value;
}

export { Alert, alertCall };
