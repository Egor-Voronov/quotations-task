import type { FC } from "react";
import { PageLayoutProps } from "./PageLayout.types.ts";
import styles from "./PageLayout.module.css";

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
