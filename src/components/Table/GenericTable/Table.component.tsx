import "./Table.style.css";
import React, { PropsWithChildren } from "react";

interface TableProps<T> {
  items: T[];
  columns: { description: string; type: "string" | "number" }[];
}
const Table = <T,>({ items, columns }: PropsWithChildren<TableProps<T>>) => {
  return (
    <>
      <div className="table__wrapper">
        <thead>
          {columns.map((title) => (
            <th>{title.description}</th>
          ))}
        </thead>
        <tbody>
          {items.map((item) => {
            const values = Object.values(item);
            return (
              <tr>
                {values.map((value, index) => {
                  if (columns[index].type === "string") return <td>{value}</td>;
                  return <td className="numeric">{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </div>
    </>
  );
};

export default Table;
