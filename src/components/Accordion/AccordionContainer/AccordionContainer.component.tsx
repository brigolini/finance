import React, { PropsWithChildren } from "react";
import "./AccordionContainer.styles.css";

const AccordionContainer: React.FC = ({ children }: PropsWithChildren<{}>) => {
  return <div className="accordion-container">{children}</div>;
};

export default AccordionContainer;
