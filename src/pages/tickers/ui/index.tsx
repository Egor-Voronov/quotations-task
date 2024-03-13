import type { FC } from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { useEffect, useState } from "react";
import { ITicker, TickerTable, useTickerStore } from "@/entities/tickers";
import { Link } from "react-router-dom";

export const TickersPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabAData, setTabAData] = useState<ITicker[]>([]);
  const [tabBData, setTabBData] = useState<ITicker[]>([]);
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
    <PageLayout>
      <Link to={"/"}>О приложении</Link>

      {isLoading ? (
        <div>Загрузка...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <TickerTable data={tabAData} />
      )}
    </PageLayout>
  );
};
