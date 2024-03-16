import { AboutPage } from "@/pages/about";
import { TickersPage } from "@/pages/tickers";

export const routeConfig = [
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/tickers",
    element: <TickersPage />,
  },
];
