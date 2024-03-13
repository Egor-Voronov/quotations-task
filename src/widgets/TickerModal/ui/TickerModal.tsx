import { FC, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { tickerModalStore } from "../store";

export const TickerModal: FC = () => {
  const store = tickerModalStore;
  const [localShowModal, setLocalShowModal] = useState(store.showModal);

  const handleClose = () => {
    store.closeModal();
    setLocalShowModal(false);
  };

  return (
    <Modal showModal={localShowModal} onClose={handleClose}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      quidem.
    </Modal>
  );
};
