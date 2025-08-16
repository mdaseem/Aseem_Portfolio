import React from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import DynamicHoc from "../components/DynamicHoc/DynamicHoc";

export default function ThisIsPortfolioHome() {
  return (
    <div className="page-view">
      <Header />
      <DynamicHoc />
      <Menu />
    </div>
  );
}
