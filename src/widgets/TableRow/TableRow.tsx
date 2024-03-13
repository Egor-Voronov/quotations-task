import React, { FC } from "react";
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
  <td onClick={onModalOpen} className={isChanged ? styles.changed : ""}>
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
    {Object.values(data)
      .slice(2)
      .map((value, index) => (
        <React.Fragment key={index}>
          {renderCell({ value, isChanged, onModalOpen })}
        </React.Fragment>
      ))}
  </tr>
);
