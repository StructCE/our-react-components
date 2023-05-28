import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRender } from "./customRender";

type AlertCallProps = {
  title: string | JSX.Element;
  content: string;
  cancelText?: string;
  confirmText?: string;
  children?: JSX.Element;
  conditionToOpen?: true;
};

type AlertProps = AlertCallProps & {
  onCancel?: () => void;
  onConfirm?: () => void;
  defaultOpen?: boolean;
};

function Alert(props: AlertProps) {
  return (
    <AlertDialog.Root defaultOpen={props.defaultOpen}>
      {props.conditionToOpen ? (
        <AlertDialog.Trigger asChild>{props.children}</AlertDialog.Trigger>
      ) : (
        props.children
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="fixed inset-0 flex justify-center items-center">
          <div className="text-amber-950 relative flex flex-col items-center bg-slate-50 w-96 h-48 border-t-4 border-t-red-700 rounded-md">
            <AlertDialog.Title className="font-bold text-xl mt-2">
              {props.title}
            </AlertDialog.Title>
            <AlertDialog.Description className="italic">
              {props.content}
            </AlertDialog.Description>
            <div className="mt-10 w-56 flex justify-between">
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  onClick={props.onCancel}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {props.cancelText || "cancelar"}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  onClick={props.onConfirm}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {props.confirmText || "confirmar"}
                </button>
              </AlertDialog.Action>
            </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

async function AlertCall(props: AlertCallProps) {
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
        {...props}
      />
    );
  });
  let value = null;
  await operation.then((data) => {
    value = data;
  });
  return value;
}

export { Alert, AlertCall };
