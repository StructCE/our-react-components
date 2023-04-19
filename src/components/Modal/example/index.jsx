// o botão não fecha

import { Modal } from "../index";

export function ModalExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal.Root
      title="Edit Profile"
      description="Make changes to your profile here. Click save when you're done."
    >
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Your username</label>
          <input type="text" id="username" name="username" />
        </form>
      </Modal>
    </Modal.Root>
  );
}
