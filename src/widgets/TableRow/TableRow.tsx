import React, { FC } from "react";
import styles from "@/shared/styles/table.module.css";
import {
  ITableRowTypes,
  IOnCellClickProps,
  IRenderCellTypes,
} from "@/widgets/TableRow/TableRow.types.ts";
import { tickerModalStore } from "@/widgets/TickerModal";

const store = tickerModalStore;

const renderCell = <T extends string | number>({
  value,
  tradeId,
  isChanged,
  onModalOpen,
}: IRenderCellTypes<T> & { tradeId: string }) => (
  <td
    onClick={() => onCellClick({ tradeId, onModalOpen })}
    className={isChanged ? styles.changed : ""}
  >
    {value}
  </td>
);

const onCellClick = ({ tradeId, onModalOpen }: IOnCellClickProps) => {
  if (onModalOpen) {
    store.setSelectedTickerId(tradeId);
    onModalOpen();
  }
};

export const TableRow: FC<ITableRowTypes> = ({
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
