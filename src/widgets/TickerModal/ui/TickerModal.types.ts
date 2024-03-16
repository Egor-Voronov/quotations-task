import type { IModalLayoutProps } from "@/shared/ui/Modal";
import type { ITicker } from "@/entities/tickers";

export interface ITickerModalProps extends Omit<IModalLayoutProps, "children"> {
  data: ITicker[] | null;
}
