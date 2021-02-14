import React from "react";
import banks from "../mock/banks";
import "../styles/reset.style.css";
import "../styles/colors.styles.css";
import "../styles/typography.style.css";
import Table from "./Table/GenericTable/Table.component";
import currencyFormat from "../logic/formats";

const App = () => {
  const totalInvested = banks
    .map((bank) => bank.moneyInvested)
    .reduce((total, balance) => total + balance);
  const items = banks.map((value) => {
    return {
      description: value.description,
      value: (value.moneyInvested * 100) / totalInvested,
    };
  });
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Table
        items={banks.map((bank) => {
          return {
            bankName: bank.description,
            valueInvested: currencyFormat(bank.moneyInvested),
          };
        })}
        columns={[
          { description: "Bank Name", type: "string" },
          { description: "Total Invested", type: "number" },
        ]}
      />
    </div>
  );
};

export default App;
