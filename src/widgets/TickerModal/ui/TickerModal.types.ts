import { IModalLayoutProps } from "@/shared/ui/Modal/Modal.types.ts";
import { ITicker } from "@/entities/tickers";

export interface ITickerModalProps extends Omit<IModalLayoutProps, "children"> {
  data: ITicker[] | null;
}
