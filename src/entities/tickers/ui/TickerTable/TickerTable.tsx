import type { FC } from "react";
import type { TickerTableProps } from "./TickerTable.types.ts";
import styles from "./TickerTable.module.css";

export const TickerTable: FC<TickerTableProps> = ({ data }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Имя котировки</th>
            <th>Цена</th>
            <th>Лучшая цена</th>
            <th>Изменение цены</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.tradeId}>
              <td>{item.symbol}</td>
              <td>{item.price}</td>
              <td>{item.bestBidPrice}</td>
              <td>{item.percentChange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
