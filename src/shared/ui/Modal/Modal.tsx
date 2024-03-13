import type { FC } from "react";
import type { ModalLayoutProps } from "@/shared/ui/Modal/Modal.types.ts";
import styles from "Modal.module.css";
import { createPortal } from "react-dom";

export const Modal: FC<ModalLayoutProps> = ({
  children,
  showModal,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {showModal &&
        createPortal(
          <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modalContent}>{children}</div>
            <button onClick={handleClose}>Закрыть</button>
          </div>,
          document.body,
        )}
    </>
  );
};
