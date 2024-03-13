import { FC } from "react";
import { Modal } from "@/shared/ui/Modal";
import { ITickerModalProps } from "./TickerModal.types.ts";
import { tickerModalStore } from "@/widgets/TickerModal";

export const TickerModal: FC<ITickerModalProps> = ({
  showModal,
  onModalClose,
  data,
}) => {
  const store = tickerModalStore;

  return (
    <Modal showModal={showModal} onModalClose={onModalClose}>
      {data?.map((ticker) => {
        return ticker.tradeId === store.selectedTickerId ? (
          <div key={ticker.tradeId}>{ticker.symbol}</div>
        ) : null;
      })}
    </Modal>
  );
};
