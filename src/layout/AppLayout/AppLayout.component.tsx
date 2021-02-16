import React from "react";
import HeaderBar from "layout/HeaderBar/HeaderBar.component";
import "./AppLayout.style.css";
import Footer from "layout/footer/Footer.component";

const AppLayout: React.FC = () => {
  return (
    <div className="app-container">
      <div className="app-container__header">
        <HeaderBar />
      </div>
      <div className="app-container__content">
        <aside className="app-container__sidebar">aside part</aside>
        <main className="app-container__main">main part</main>
      </div>
      <footer className="app-container__bottom">
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
