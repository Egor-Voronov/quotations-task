import { ReactNode } from "react";

export interface ModalLayoutProps {
  children?: ReactNode;
  showModal: boolean;
  onClose: () => void;
}
