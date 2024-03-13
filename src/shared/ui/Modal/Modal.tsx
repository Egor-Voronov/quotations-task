import type { FC } from "react";
import type { IModalLayoutProps } from "../../ui/Modal/Modal.types.ts";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import React from "react";

export const Modal: FC<IModalLayoutProps> = ({
  children,
  showModal,
  onModalClose,
}) => {
  const handleClose = () => {
    onModalClose();
  };

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {showModal &&
        createPortal(
          <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modalContent} onClick={handleContentClick}>
              {children}
              <button onClick={handleClose}>Закрыть</button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
