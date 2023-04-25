// Proposta do exemplo: Mostrar o funcionamento de um modal não-controlado (padrão).
// Em síntese, o modal é aberto e colocado em foco ao se apertar o botão "Open Modal".
// Dentro do modal, há exemplos de textos e inputs que podem ser inseridos.
// Por fim, para fechar o modal, basta clicar nos botões "Save", "X" ou fora do modal.
import { Modal } from "../index";
import { CloseX } from "./svgs";
import { ModalStyled } from "./styles";

export function ModalExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal.Root>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal>
        <ModalStyled>
          <h1>Edit Profile</h1>
          <h2>
            Make changes to your profile here. Click save when you are done
          </h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </form>
          <div className="closing-container">
            <Modal.Close asChild>
              <button type="submit" aria-label="Close" className="SaveButton">
                Save
              </button>
            </Modal.Close>
            <Modal.Close asChild>
              <button type="submit" aria-label="Close" className="IconButton">
                <CloseX />
              </button>
            </Modal.Close>
          </div>
        </ModalStyled>
      </Modal>
    </Modal.Root>
  );
}
