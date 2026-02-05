import React from "react";
import "./globals.css";
import Image from "next/image";
import Menu from "./components/Atoms/Menu/Menu";
import Header from "./components/Atoms/Header/Header";
import Main from "./components/Main/Main";
import ProjectContainer from "./components/Molecules/ProjectsContainer/ProjectContainer";
import SEO from "./components/SEO/SEO";
import Resume from "./components/Atoms/Resume/Resume";
import FadeIn from "./components/HOC/FadeIn/FadeIn";

export default function ThisIsPortfolioHome() {
  return (
    <>
      <SEO
        title="Mohammed Aseem | Front-end Developer"
        description="Welcome to Mohammed Aseem's portfolio. Aseem builds web apps using TypeScript, Next.js, and more."
        keywords="portfolio, next.js, typescript, web developer,
         front-end developer,
         javascript, react, web design, web development,
         UI/UX design, Node.js, graphql, web applications, Aseem is a front end engineer, Aseem is a software engineer, Mohammed Aseem,Mohammed aseem is a Front End Developer Specializing in React & JavaScript"
        url="https://aseem-portfolio.vercel.app/Projects"
        image="https://aseem-portfolio.vercel.app/My_Image1.JPG"
      />
      <div className="page-view">
        <Menu>
          {""}
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
          <FadeIn delay={`${0.1}s`}>
            <section id="resume">
              <Resume />
            </section>
          </FadeIn>
        </Main>
      </div>
    </>
  );
}
