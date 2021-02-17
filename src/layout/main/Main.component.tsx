import React from "react";
import AccordionContainer from "components/Accordion/AccordionContainer/AccordionContainer.component";
import investments from "mock/investments";
import AccordionPanel from "components/Accordion/AccordionPanel/AccordionPanel.component";
import MiniPieChart from "components/PieChart/mini/MiniPieChart.component";
import currencyFormat from "logic/formats";
import InvestmentSummary from "components/InvestmentSummary/InvestmentSummary.component";

const MainComponent: React.FC = () => {
  const totalInvestment = investments
    .map(({ currentValue }) => currentValue)
    .reduce((previous, current) => previous + current);
  return (
    <>
      <AccordionContainer>
        {investments.map(
          ({ bank, totalInvested, description, currentValue, id }) => (
            <AccordionPanel
              key={id}
              leftImage={
                <MiniPieChart
                  items={[
                    (currentValue / (totalInvestment + currentValue)) * 100,
                    (totalInvestment / (totalInvestment + currentValue)) * 100,
                  ]}
                  value={`${Math.round(
                    (currentValue / (totalInvestment + currentValue)) * 100
                  )}%`}
                  width="5rem"
                  height="5rem"
                />
              }
              leftText={description}
              rightText={currencyFormat(currentValue)}
            >
              <InvestmentSummary
                bank={bank}
                balance={currentValue}
                description={description}
                totalInvested={totalInvested}
              />
            </AccordionPanel>
          )
        )}
      </AccordionContainer>
    </>
  );
};

export default MainComponent;
