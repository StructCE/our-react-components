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
        <AlertDialog.Overlay className="fixed inset-0 bg-black/60" />
        <AlertDialog.Content
          className="fixed inset-0 flex justify-center items-center mx-2"
          onEscapeKeyDown={onCancel}
        >
          <div className="relative flex flex-col items-center p-2 text-md text-white/80 font-medium rounded-lg bg-gradient-to-t from-gray-950 to-gray-900 border-b-2 border-cyan-600">
            <AlertDialog.Title className="mt-2 mb-2 mx-6 text-xl">
              {title}
            </AlertDialog.Title>
            <AlertDialog.Description className="font-normal mb-2">
              {content}
            </AlertDialog.Description>
            <div>
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  onClick={onCancel}
                  className="mx-8 my-4 hover:text-cyan-600 transition-all ease-linear px-2"
                >
                  {cancelText}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  onClick={onConfirm}
                  className="mx-8 my-4 hover:text-cyan-600 transition-all ease-linear px-2"
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
