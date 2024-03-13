import type { FC } from "react";
import type { ModalLayoutProps } from "@/shared/modal/ui/Modal.types.ts";
import { useModalStore } from "@/shared/modal";
import styles from "Modal.module.css";

export const Modal: FC<ModalLayoutProps> = ({ children }) => {
  const { setClose } = useModalStore;

  const handleClose = () => {
    setClose();
  };

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modalContent}>{children}</div>
      <button onClick={handleClose}>Закрыть</button>
    </div>
  );
};
