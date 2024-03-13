import type { FC } from "react";
import type { ITicker } from "@/entities/tickers";
import styles from "@/shared/styles/table.module.css";

const renderCell = <T extends string | number>(
  value: T,
  isChanged: boolean,
  onOpen: () => void,
) => (
  <td onClick={() => onOpen()} className={isChanged ? styles.changed : ""}>
    {value}
  </td>
);

export const TableRow: FC<{
  data: ITicker;
  isChanged: boolean;
  onOpen: () => void;
}> = ({ data, isChanged, onOpen }) => (
  <tr>
    {renderCell(data.symbol, isChanged, onOpen)}
    {renderCell(data.price, isChanged, onOpen)}
    {renderCell(data.bestBidPrice, isChanged, onOpen)}
    {renderCell(data.percentChange, isChanged, onOpen)}
  </tr>
);
