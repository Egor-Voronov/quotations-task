import type { ITicker } from "@/entities/tickers";

export interface ITickerTableRowTypes {
  data: ITicker;
  isChanged: boolean;
  onModalOpen: () => void;
}

export interface IRenderCellTypes<T>
  extends Omit<ITickerTableRowTypes, "data"> {
  value: T;
  tradeId: string;
}

export interface IOnCellClickProps {
  tradeId: string | null;
  onModalOpen: () => void;
}
