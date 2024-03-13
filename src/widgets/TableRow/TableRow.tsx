import type { FC } from "react";
import type { ITicker } from "@/entities/tickers";
import styles from "@/shared/styles/table.module.css";

const renderCell = <T extends string | number>(
  value: T,
  isChanged: boolean,
) => <td className={isChanged ? styles.changed : ""}>{value}</td>;

export const TableRow: FC<{ data: ITicker; isChanged: boolean }> = ({
  data,
  isChanged,
}) => (
  <tr>
    {renderCell(data.symbol, isChanged)}
    {renderCell(data.price, isChanged)}
    {renderCell(data.bestBidPrice, isChanged)}
    {renderCell(data.percentChange, isChanged)}
  </tr>
);
