import React, { PropsWithChildren } from "react";
import "./AccordionPanel.styles.css";
import { ReactComponent as Icon } from "images/plus-sign.svg";

interface AccordionPanelProps {
  leftImage: JSX.Element;
  leftText: string;
  rightText: string;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  leftText,
  leftImage,
  rightText,
  children,
}: PropsWithChildren<AccordionPanelProps>) => {
  return (
    <>
      <div className="accordion-panel">
        <input type="checkbox" className="accordion-panel__checkbox" />
        <div className="accordion-panel__summary">
          <span className="accordion-panel__left-image">{leftImage}</span>
          <span className="accordion-panel__left-text">{leftText}</span>
          <span className="accordion-panel__right-text">{rightText}</span>
          <span className="accordion-panel__icon">
            <Icon className="accordion-panel__icon__image" />
          </span>
        </div>
        <div className="accordion-panel__card">{children}</div>
      </div>
    </>
  );
};

export default AccordionPanel;
