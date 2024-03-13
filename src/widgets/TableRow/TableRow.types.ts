import { ITicker } from "@/entities/tickers";

export interface ITableRowTypes {
  data: ITicker;
  isChanged: boolean;
  onModalOpen: () => void;
}

export interface IRenderCellTypes<T> extends Omit<ITableRowTypes, "data"> {
  value: T;
}

export interface IOnCellClickProps {
  tradeId: string | null;
  onModalOpen: () => void;
}
