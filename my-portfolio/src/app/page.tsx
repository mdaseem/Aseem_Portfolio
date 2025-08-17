import React from "react";
import Header from "./components/Atoms/Header/Header";
import Menu from "./components/Atoms/Menu/Menu";
import Main from "./components/Main/Main";

export default function ThisIsPortfolioHome() {
  return (
    <div className="page-view">
      <Menu />
      <Header />
      <Main>
        <p>This is my portfolio</p>
      </Main>
    </div>
  );
}
