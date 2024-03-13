import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app";
import "./global.css";

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
