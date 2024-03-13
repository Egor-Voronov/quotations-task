import type { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
