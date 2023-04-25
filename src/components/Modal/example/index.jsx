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
