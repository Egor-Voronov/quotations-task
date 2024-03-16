import type { ITicker } from "@/entities/tickers";
import type { Tab } from "@/features/Tab.ts";

export interface ITabsProps {
  data: ITicker[];
  activeTab: Tab;
}
