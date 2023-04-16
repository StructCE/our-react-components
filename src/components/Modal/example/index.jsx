// o botão não fecha

import { Modal, ModalTrigger, ModalContent } from "../index";

export function ModalExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      title="Edit Profile"
      description="Make changes to your profile here. Click save when you're done."
    >
      <ModalTrigger>
        <button type="button">Open Modal</button>
      </ModalTrigger>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Your username</label>
          <input type="text" id="username" name="username" />
          <button type="submit" onClick="Close">
            Salvar
          </button>
        </form>
      </ModalContent>
    </Modal>
  );
}
