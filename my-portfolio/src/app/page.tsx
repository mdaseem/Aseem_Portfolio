import React from "react";
import "./globals.css";
import Main from "./components/Main/Main";
import SEO from "./components/SEO/SEO";
import Resume from "./components/Atoms/Resume/Resume";
import FadeIn from "./components/HOC/FadeIn/FadeIn";
import PortfolioPage from "./components/Molecules/PortfolioPage/PortfolioPage";

export default function ThisIsPortfolioHome() {
  return (
    <>
      <SEO
        title="Mohammed Aseem | Full Stack Engineer"
        description="Welcome to Mohammed Aseem's portfolio. Aseem builds web apps using TypeScript, Next.js, and more."
        keywords="portfolio, next.js, typescript, web developer,
         full stack engineer, front end developer, React,
         javascript, react, web design, web development,
         UI/UX design, Node.js, graphql, web applications, Aseem is a front end engineer, Aseem is a software engineer, Mohammed Aseem,Mohammed aseem is a Front End Developer Specializing in React & JavaScript"
        url="https://aseem-portfolio.vercel.app/Projects"
        image="https://aseem-portfolio.vercel.app/My_Image1.JPG"
      />
      <div className="page-view">
        <Main>
          <PortfolioPage />
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
