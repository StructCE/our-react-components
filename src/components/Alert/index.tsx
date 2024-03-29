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
  canOpen=boolean
>
  <button>Botão</button>
</Alert>

Sobre canOpen:
 canOpen auxilia a ter um melhor controle de quando o Alert deve abrir. O Alert irá
 ser acionado pelo trigger ou pela chamada de alertCall, somente se o canOpen for true.
 Seu valor default é true

Sobre defaultOpen:
 defaultOpen define se, quando o componente for renderizado pela primeira vez, ele iniciará
 aberto (quando defaultOpen for true) ou não (quando defaultOpen for false)
*/
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
      )}{" "}
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
