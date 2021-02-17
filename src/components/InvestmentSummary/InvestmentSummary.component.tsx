import React, { PropsWithChildren } from "react";
import "./InvestmentSummay.styles.css";
import { ReactComponent as Up } from "images/arrow-up-right.svg";
import { ReactComponent as Down } from "images/arrow-down-right.svg";
import currencyFormat from "logic/formats";
import calculatePercentage from "components/InvestmentSummary/InvestmentSummaryLogic";

interface InvestmentSummaryProps {
  totalInvested: number;
  balance: number;
  description: string;
  bank: string;
}
const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({
  totalInvested,
  balance,
  bank,
  description,
}: PropsWithChildren<InvestmentSummaryProps>) => {
  return (
    <div className="card-investment">
      <div className="card-investment__column">
        <span>Investment</span>
        <span>{description}</span>
        <span>Bank</span>
        <span>{bank}</span>
        {totalInvested > balance ? <Down /> : <Up />}
      </div>
      <div className="card-investment__column">
        <span>Total invested</span>
        <span>{currencyFormat(totalInvested)}</span>
        <span>Balance</span>
        <span>{currencyFormat(balance)}</span>
        <span>Profit</span>
        <span className={totalInvested > balance ? "negative" : ""}>
          {calculatePercentage(totalInvested, balance)}%
        </span>
      </div>
    </div>
  );
};

export default InvestmentSummary;
