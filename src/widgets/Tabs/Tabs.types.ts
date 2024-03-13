import { ITicker } from "@/entities/tickers";
import { Tab } from "@/features/Tab.ts";

export interface ITabsProps {
  data: ITicker[];
  activeTab: Tab;
}
