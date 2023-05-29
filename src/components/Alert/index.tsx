import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRootRender } from "./customRootRender";

/*
Forma de utilização:

<Alert
  title=" "
  content=" "
  onConfirm={function}
  confirmText=" "
  onCancel={function}
  cancelText=" "
  defaultOpen=boolean
>
  <button>Botão</button>
</Alert>

Sobre defaultOpen:
 defaultOpen define se, quando o componente for renderizado a primeira vez, ele iniciará
 aberto (quando defaultOpen for true) ou não (quando defaultOpen for false)
*/
type alertCallProps = {
  title: string | JSX.Element;
  content: string;
  cancelText?: string;
  confirmText?: string;
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
}: alertProps) {
  return (
    <AlertDialog.Root defaultOpen={defaultOpen}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/40" />
        <AlertDialog.Content
          className="fixed inset-0"
          onEscapeKeyDown={onCancel}
        >
          <div className="bg-white">
            <AlertDialog.Title>{title}</AlertDialog.Title>
            <AlertDialog.Description>{content}</AlertDialog.Description>
            <div>
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
            </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

/*
Forma de utilização:

function() {
  api
    .post('/rota', data)
    .catch(async () => {
      const response = await alertCall({...attributes})
    })
}
*/
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
