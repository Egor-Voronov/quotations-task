import { FC, useEffect, useState } from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { ITicker, tickerStore } from "@/entities/tickers";
import { tickerModalStore } from "@/widgets/TickerModal";
import { Link } from "react-router-dom";
import { Tabs } from "@/widgets/Tabs";
import { Tab } from "@/features/Tab.ts";

export const TickersPage: FC = () => {
  const store = tickerModalStore;

  const [isLoading, setIsLoading] = useState(true);
  const [tabAData, setTabAData] = useState<ITicker[]>([]);
  const [tabBData, setTabBData] = useState<ITicker[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.A);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchTickers = async () => {
      if (!store.showModal) {
        try {
          await tickerStore.fetchTickers();
          setIsLoading(false);
          if (activeTab === Tab.A) setTabAData(tickerStore.tabA);
          if (activeTab === Tab.B) setTabBData(tickerStore.tabB);
        } catch (err) {
          setIsLoading(false);
          console.error(`Ошибка: ${err}`);
        }
      }
    };

    fetchTickers();

    const intervalId = setInterval(fetchTickers, 5000);

    return () => clearInterval(intervalId);
  }, [activeTab]);

  return (
    <>
      <PageLayout>
        <Link to={"/"}>О приложении</Link>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          <div>
            <Tabs
              activeTab={activeTab}
              data={activeTab === Tab.A ? tabAData : tabBData}
            />
            {(activeTab === Tab.A && tabAData.length === 0) ||
            (activeTab === Tab.B && tabBData.length === 0) ? (
              <div>Загрузка...</div>
            ) : null}
            <div>
              <button onClick={() => handleTabChange(Tab.A)}>{Tab.A}</button>
              <button onClick={() => handleTabChange(Tab.B)}>{Tab.B}</button>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
};
