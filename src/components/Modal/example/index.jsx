import { Modal } from "../index";
import { CloseX } from "./svgs";

export function ModalExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal.Root>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal>
        <h1>Edit Profile</h1>
        <h2>Make changes to your profile here. Click save when you are done</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Your username</label>
          <input type="text" id="username" name="username" />
        </form>
        <Modal.Close type="submit" aria-label="Close" asChild>
          Save
        </Modal.Close>
        <Modal.Close type="submit" aria-label="Close" asChild>
          <CloseX />
        </Modal.Close>
      </Modal>
    </Modal.Root>
  );
}
