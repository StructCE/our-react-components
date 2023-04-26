// eslint-disable-next-line import/no-extraneous-dependencies
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { render } from "./utils/render";

function Alert({
  children,
  title,
  content,
  cancelText,
  confirmText,
  onConfirm,
  onCancel,
  open,
}) {
  return (
    <AlertDialog.Root defaultOpen={open}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{
            position: "fixed",
            inset: "0",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
        <AlertDialog.Content style={{ position: "fixed", inset: "0" }}>
          <h1>{title}</h1>
          <p>{content}</p>
          <AlertDialog.Cancel asChild>
            <button type="button" onClick={onCancel}>
              {cancelText}
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button type="button" onClick={onConfirm}>
              {confirmText}
            </button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

function AlertCall({
  title,
  content,
  cancelText,
  confirmText,
  onConfirm,
  onCancel,
  conditionToOpen,
}) {
  if (conditionToOpen) {
    render(
      <Alert
        title={title}
        content={content}
        cancelText={cancelText}
        confirmText={confirmText}
        onConfirm={onConfirm}
        onCancel={onCancel}
        open
      />
    );
  }
}

export { Alert, AlertCall };
