import React from "react";
import Header from "../components/Atoms/Header/Header";
import Menu from "../components/Atoms/Menu/Menu";
import Main from "../components/Main/Main";
import ProjectContainer from "../components/Molecules/ProjectsContainer/ProjectContainer";
import "../../app/globals.css";

export default function ThisIsPortfolioHome() {
  return (
    <div className="page-view">
      <Menu />
      <Header />
      <div className="name-title">Mohammed Aseem</div>
      <Main>
        <ProjectContainer />
      </Main>
    </div>
  );
}
