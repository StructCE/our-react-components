/* eslint-disable no-console */
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRender } from "./utils/customRender";

function Alert({
  title,
  content,
  cancelText,
  onCancel,
  confirmText,
  onConfirm,
  children,
  conditionToOpen,
  defaultOpen,
}) {
  return (
    <AlertDialog.Root defaultOpen={defaultOpen}>
      {(conditionToOpen && (
        <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      )) ||
        children}
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{
            position: "fixed",
            inset: "0",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
        <AlertDialog.Content style={{ position: "fixed", inset: "0" }}>
          <div style={{ backgroundColor: "white" }}>
            <h1>{title}</h1>
            <p>{content}</p>
            <div>
              <AlertDialog.Cancel asChild>
                <button type="button" onClick={onCancel}>
                  {cancelText || "cancelar"}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button type="button" onClick={onConfirm}>
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

async function AlertCall() {
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
      />
    );
  });
  await operation.then((data) => {
    value = data;
  });

  return value;
}

export { Alert, AlertCall };
