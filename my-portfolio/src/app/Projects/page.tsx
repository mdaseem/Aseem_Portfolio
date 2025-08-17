import React from "react";
import Header from "../components/Atoms/Header/Header";
import Menu from "../components/Atoms/Menu/Menu";
import Main from "../components/Main/Main";
import ProjectContainer from "../components/Molecules/ProjectsContainer/ProjectContainer";

export default function ThisIsPortfolioHome() {
  return (
    <div className="page-view">
      <Menu />
      <Header />
      <Main>
        <p>This is my portfolio</p>
      </Main>
      <ProjectContainer />
    </div>
  );
}
