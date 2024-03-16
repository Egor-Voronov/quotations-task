import React from "react";
import type { FC } from "react";
import styles from "@/shared/styles/table.module.css";
import type {
  ITickerTableRowTypes,
  IOnCellClickProps,
  IRenderCellTypes,
} from "./TableRow.types.ts";
import { tickerModalStore } from "@/widgets/TickerModal";

const modalStore = tickerModalStore;

const renderCell = <T extends string | number>({
  value,
  tradeId,
  isChanged,
  onModalOpen,
}: IRenderCellTypes<T>) => (
  <td
    onClick={() => onCellClick({ tradeId, onModalOpen })}
    className={isChanged ? styles.changed : ""}
  >
    {value}
  </td>
);

const onCellClick = ({ tradeId, onModalOpen }: IOnCellClickProps) => {
  if (onModalOpen) {
    modalStore.setSelectedTickerId(tradeId);
    onModalOpen();
  }
};

export const TickerTableRow: FC<ITickerTableRowTypes> = ({
  data,
  isChanged,
  onModalOpen,
}) => (
  <tr>
    {renderCell({
      value: data.symbol,
      tradeId: data.tradeId,
      isChanged,
      onModalOpen,
    })}
    {Object.entries(data)
      .slice(2)
      .map(([key, value]) => (
        <React.Fragment key={key}>
          {renderCell({ value, tradeId: data.tradeId, isChanged, onModalOpen })}
        </React.Fragment>
      ))}
  </tr>
);
