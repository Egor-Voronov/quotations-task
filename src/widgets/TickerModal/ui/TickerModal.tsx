import { FC, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { ModalLayoutProps } from "@/shared/ui/Modal/Modal.types.ts";

export const TickerModal: FC<ModalLayoutProps> = ({ showModal, onClose }) => {
  return (
    <Modal showModal={showModal} onClose={onClose}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      quidem.
    </Modal>
  );
};
