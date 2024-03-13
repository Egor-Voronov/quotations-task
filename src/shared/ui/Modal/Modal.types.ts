import { ReactNode } from "react";

export interface IModalLayoutProps {
  children?: ReactNode;
  showModal: boolean;
  onModalClose: () => void;
}
