import React from "react";
import DynamicHoc from "./components/DynamicHoc/DynamicHoc";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

export default function ThisIsPortfolioHome() {

  return (
    <div className="page-view">
      <Header />
      <DynamicHoc />
      {<Menu />}
      <footer className="footer-content">End</footer>
    </div>
  );
}
