import { FC, useEffect, useState } from "react";
import { useTickerStore } from "@/entities/tickers";

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

  return (
    <>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>{tabAData[0].price}</div>
      )}
    </>
  );
};
