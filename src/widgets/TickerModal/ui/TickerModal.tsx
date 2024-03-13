import { FC } from "react";
import { Modal } from "@/shared/ui/Modal";
import { IModalLayoutProps } from "@/shared/ui/Modal/Modal.types.ts";

export const TickerModal: FC<IModalLayoutProps> = ({
  showModal,
  onModalClose,
}) => {
  return (
    <Modal showModal={showModal} onModalClose={onModalClose}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      quidem.
    </Modal>
  );
};
