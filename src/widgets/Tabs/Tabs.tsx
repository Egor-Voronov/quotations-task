import { FC } from "react";
import { ITabsProps } from "./Tabs.types.ts";
import { TickerTable } from "@/widgets/TickerTable";
import { TickerModal, tickerModalStore } from "@/widgets/TickerModal";
import { useState } from "react";

export const Tabs: FC<ITabsProps> = ({ data }) => {
  const store = tickerModalStore;
  const [localShowModal, setLocalShowModal] = useState(store.showModal);

  const handleClose = () => {
    store.closeModal();
    setLocalShowModal(false);
  };

  const handleOpen = () => {
    store.openModal();
    setLocalShowModal(true);
  };

  return (
    <>
      <TickerModal
        showModal={localShowModal}
        onModalClose={handleClose}
        data={data}
      />
      <TickerTable data={data} onModalOpen={handleOpen} />
    </>
  );
};
