import { FC, useEffect, useState } from "react";
import { useTickerStore } from "@/entities/tickers";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabAData, setTabAData] = useState<any[]>([]);
  const [tabBData, setTabBData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        await useTickerStore.fetchTickers();
        setIsLoading(false);
        setError(null);
        setTabAData(useTickerStore.tabA);
        setTabBData(useTickerStore.tabB);
      } catch (err) {
        setIsLoading(false);
        setError(`Ошибка: ${err}`);
      }
    };

    fetchTickers();

    const intervalId = setInterval(fetchTickers, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return <RouterProvider router={router} />;
};
