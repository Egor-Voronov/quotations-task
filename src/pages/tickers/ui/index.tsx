import type { FC } from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { useEffect, useState } from "react";
import { ITicker, tickerStore } from "@/entities/tickers";

import { tickerModalStore } from "@/widgets/TickerModal";
import { Link } from "react-router-dom";
import { Tabs } from "@/widgets/Tabs";

export const TickersPage: FC = () => {
  const store = tickerModalStore;

  const [isLoading, setIsLoading] = useState(true);
  const [tabAData, setTabAData] = useState<ITicker[]>([]);
  // const [tabBData, setTabBData] = useState<ITicker[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickers = async () => {
      if (!store.showModal) {
        try {
          await tickerStore.fetchTickers();
          setIsLoading(false);
          setError(null);
          setTabAData(tickerStore.tabA);
          // setTabBData(tickerStore.tabB);
        } catch (err) {
          setIsLoading(false);
          setError(`Ошибка: ${err}`);
        }
      }
    };

    fetchTickers();

    const intervalId = setInterval(fetchTickers, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <PageLayout>
        <Link to={"/"}>О приложении</Link>

        {isLoading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Tabs data={tabAData} />
        )}
      </PageLayout>
    </>
  );
};
