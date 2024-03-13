import { FC } from "react";
import styles from "@/shared/styles/table.module.css";
import {
  ITableRowTypes,
  IRenderCellTypes,
} from "@/widgets/TableRow/TableRow.types.ts";

const renderCell = <T extends string | number>({
  value,
  isChanged,
  onModalOpen,
}: IRenderCellTypes<T>) => (
  <td onClick={() => onModalOpen()} className={isChanged ? styles.changed : ""}>
    {value}
  </td>
);

export const TableRow: FC<ITableRowTypes> = ({
  data,
  isChanged,
  onModalOpen,
}) => (
  <tr>
    {renderCell({ value: data.symbol, isChanged, onModalOpen })}
    {renderCell({ value: data.price, isChanged, onModalOpen })}
    {renderCell({ value: data.bestBidPrice, isChanged, onModalOpen })}
    {renderCell({ value: data.percentChange, isChanged, onModalOpen })}
  </tr>
);
