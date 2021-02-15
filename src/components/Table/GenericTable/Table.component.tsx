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
        <table>
          <thead>
            <tr>
              {columns.map((title) => (
                <th key={title.description}>{title.description}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const values = Object.values(item);
              return (
                <tr key={values[0]}>
                  {values.map((value, index) => {
                    if (columns[index].type === "string")
                      return <td key={value}>{value}</td>;
                    return <td className="numeric" key={value}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
