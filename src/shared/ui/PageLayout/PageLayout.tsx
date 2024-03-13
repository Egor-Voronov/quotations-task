import type { FC } from "react";
import { PageLayoutProps } from "./page-layout.types.ts";
import styles from "./styles.module.css";

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
