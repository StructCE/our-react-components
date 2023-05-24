// Proposta do exemplo: Mostrar o funcionamento de um modal não-controlado (padrão).
// Em síntese, o modal é aberto e colocado em foco ao se apertar o botão "Open Modal".
// Dentro do modal, há exemplos de textos e inputs que podem ser inseridos.
// Por fim, para fechar o modal, basta clicar nos botões "Save", "X" ou fora do modal.
import { Modal } from "../index";
import { CloseX } from "./svgs";
import { ModalStyled } from "./styles";
import { UsersForm } from "./users";
import { useApiSimulator } from "./utils";

export function ModalExample() {
  // simulando api
  const api = useApiSimulator();

  return (
    <Modal.Root>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <ModalStyled>
          <h1>Add User</h1>
          <h2>
            Please enter the user's informations. Click save when you are done.
          </h2>
          <UsersForm
            onValidSubmit={({ formInfo }) => {
              api
                .post("/users/create", { user: formInfo })
                // eslint-disable-next-line no-alert
                .then(() => alert("Usuário criado com sucesso"))
                // eslint-disable-next-line no-alert
                .catch((er) => alert(er));
            }}
            onInvalidSubmit={({ errors }) => {
              // eslint-disable-next-line no-alert
              errors.map((error) => alert(error));
            }}
            buttonContent="Adicionar"
          />
          <Modal.Close asChild>
            <button type="button" aria-label="Close" className="IconButton">
              <CloseX />
            </button>
          </Modal.Close>
        </ModalStyled>
      </Modal.Content>
    </Modal.Root>
  );
}
