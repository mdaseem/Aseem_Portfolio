import React from "react";
import "./globals.css";
import Image from "next/image";
import Menu from "./components/Atoms/Menu/Menu";
import Header from "./components/Atoms/Header/Header";
import Main from "./components/Main/Main";
import ProjectContainer from "./components/Molecules/ProjectsContainer/ProjectContainer";
import SEO from "./components/SEO/SEO";

export default function ThisIsPortfolioHome() {
  return (
    <>
      <SEO
        title="My Portfolio | Mohammed Aseem | Front-end Developer"
        description="Welcome to my portfolio. I build web apps using TypeScript, Next.js, and more."
        keywords="portfolio, next.js, typescript, web developer,
         front-end developer,
         javascript, react, web design, web development,
         UI/UX design, Node.js, graphql, web applications,front end engineer, software engineer, Mohammed Aseem"
        url="https://aseem-portfolio.vercel.app/Projects"
        image="https://aseem-portfolio.vercel.app/My_Image1.JPG"
      />
      <div className="page-view">
        <Menu>
          <h1 className="header-title-mobile">{`My Portfolio`}</h1>
        </Menu>
        <Header />
        <div className="profile-image-container">
          <Image
            src="/My_Image1.JPG"
            alt="Mohammed Aseem"
            className="profile-image"
            width={300}
            height={300}
          />
        </div>
        <div className="name-title">Mohammed Aseem</div>
        <Main>
          <ProjectContainer />
        </Main>
      </div>
    </>
  );
}
