import { FC, useEffect, useState } from "react";
import { PageLayout } from "@/shared/ui/PageLayout";
import { ITicker, tickerStore } from "@/entities/tickers";
import { tickerModalStore } from "@/widgets/TickerModal";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Tabs } from "@/widgets/Tabs";
import { Tab } from "@/features/Tab.ts";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";

export const TickersPage: FC = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") as Tab | null;
  const navigate = useNavigate();

  const store = tickerModalStore;

  const [isLoading, setIsLoading] = useState(true);
  const [tabAData, setTabAData] = useState<ITicker[]>([]);
  const [tabBData, setTabBData] = useState<ITicker[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>(initialTab || Tab.A);
  const [error, setError] = useState<string | null>(null); // Добавлено состояние для ошибки

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    navigate(`/tickers?tab=${tab}`);
  };

  useEffect(() => {
    const fetchTickers = async () => {
      if (!store.showModal) {
        try {
          await tickerStore.fetchTickers();
          setIsLoading(false);
          if (activeTab === Tab.A) setTabAData(tickerStore.tabA);
          if (activeTab === Tab.B) setTabBData(tickerStore.tabB);
          setError(null);
        } catch (err) {
          setIsLoading(false);
          setError(`${err}`);
        }
      }
    };

    fetchTickers();

    const intervalId = setInterval(fetchTickers, 5000);

    return () => clearInterval(intervalId);
  }, [activeTab]);

  useEffect(() => {
    console.log("Таб А получил обновление:", tabAData);
  }, [tabAData]);

  useEffect(() => {
    console.log("Tab B получил обновление:", tabBData);
  }, [tabBData]);

  return (
    <>
      <PageLayout>
        <Link to={"/"}>О приложении</Link>
        {error ? (
          <div>{error}</div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <div>
            <Tabs
              activeTab={activeTab}
              data={activeTab === Tab.A ? tabAData : tabBData}
            />
            {(activeTab === Tab.A && tabAData.length === 0) ||
            (activeTab === Tab.B && tabBData.length === 0) ? (
              <Loader />
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
