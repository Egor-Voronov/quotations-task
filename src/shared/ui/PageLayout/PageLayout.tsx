import type { FC } from "react";
import { IPageLayoutProps } from "./PageLayout.types.ts";
import styles from "./PageLayout.module.css";

export const PageLayout: FC<IPageLayoutProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
