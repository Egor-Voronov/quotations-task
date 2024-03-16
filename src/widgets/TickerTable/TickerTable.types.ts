import type { ITicker } from "@/entities/tickers";

export interface ITickerTableProps {
  data: ITicker[];
  onModalOpen: () => void;
}
