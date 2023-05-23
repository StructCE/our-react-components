import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { customRender } from "./customRender";

/*
Forma de utilização:

<Alert
  title=" "
  content=" "
  onConfirm={function}
  confirmText=" "
  onCancel={function}
  cancelText=" "
  conditionToOpen={() => return boolean}
  defaultOpen=boolean
>
  <button>Botão</button>
</Alert>

Sobre conditionToOpen:
 Ao clicar no children button, o Alert só abrirá se conditionToOpen for true, ou seja,
 você pode passar uma função que retorne um boolean para a prop conditionToOpen, a qual
 irá regular a abertura do Alert

Sobre defaultOpen:
 defaultOpen define se, quando o componente for renderizado a primeira vez, ele iniciará
 aberto (quando defaultOpen for true) ou não (quando defaultOpen for false)
*/

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

/*
Formas de utilização:
Forma 1:

function() {
  api
    .post('/rota', data)
    .catch(async () => {
      const response = await AlertCall({...attributes})
    })
}

Forma 2:

<button
  onClick={async () => {
    const response = await AlertCall({...attributes})
  }}
>
  Botão
</button>

Sobre attributes:
  São os mesmos que podem ser passados no Alert componente (title, content, confirmText, etc)
*/

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
