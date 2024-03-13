import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "@/pages/about";
import { TickersPage } from "@/pages/tickers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/tickers",
    element: <TickersPage />,
  },
]);
