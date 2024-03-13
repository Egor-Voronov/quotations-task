import { FC } from "react";
import { Modal } from "@/shared/modal";
import { useTickerModalStore } from "@/widgets";

export const TickerModal: FC = () => {
  const store = useTickerModalStore;

  const handleClose = () => {
    store.closeModal();
  };

  return (
    <Modal showModal={store.showModal} onClose={handleClose}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      quidem.
    </Modal>
  );
};
