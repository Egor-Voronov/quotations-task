import type { FC } from "react";
import { Modal } from "@/shared/ui/Modal";
import type { ITickerModalProps } from "./TickerModal.types.ts";
import { tickerModalStore } from "@/widgets/TickerModal";

export const TickerModal: FC<ITickerModalProps> = ({
  showModal,
  onModalClose,
  data,
}) => {
  const modalStore = tickerModalStore;

  return (
    <Modal showModal={showModal} onModalClose={onModalClose}>
      {data?.map((ticker) => {
        return ticker.tradeId === modalStore.selectedTickerId ? (
          <ul key={ticker.tradeId}>
            <li>Имя котировки - {ticker.symbol}</li>
            <li>Цена котировки - {ticker.price}</li>
            <li>Лучшая цена котировки - {ticker.bestBidPrice}</li>
            <li>Изменение цены котировки - {ticker.percentChange}</li>
          </ul>
        ) : null;
      })}
    </Modal>
  );
};
