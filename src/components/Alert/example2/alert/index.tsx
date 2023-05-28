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
        <AlertDialog.Overlay className="fixed inset-0 bg-black/60" />
        <AlertDialog.Content className="fixed inset-0 flex justify-center items-center">
          <div className="relative flex flex-col items-center p-2 text-md text-white/80 font-medium rounded-lg bg-gradient-to-t from-gray-950 to-gray-900 border-b-2 border-cyan-600">
            <AlertDialog.Title className="mt-2 mb-2 mx-6 text-xl">
              {props.title}
            </AlertDialog.Title>
            <AlertDialog.Description className="font-normal mb-2">
              {props.content}
            </AlertDialog.Description>
            <div className="mx-auto mt-2">
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  onClick={props.onCancel}
                  className="mx-8 my-4 hover:text-cyan-600 transition-all ease-linear px-2"
                >
                  {props.cancelText || "cancelar"}
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  onClick={props.onConfirm}
                  className="mx-8 my-4 hover:text-cyan-600 transition-all ease-linear px-2"
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
