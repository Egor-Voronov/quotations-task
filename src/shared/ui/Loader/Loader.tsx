import { FC } from "react";
import style from "./Loader.module.css";

export const Loader: FC = () => {
  return <div className={style.loaderAnimation}>Загрузка...</div>;
};
