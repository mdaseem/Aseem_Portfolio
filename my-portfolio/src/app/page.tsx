import React from "react";
import Main from "./components/Main/Main";
import SEO from "./components/SEO/SEO";
import PortfolioPage from "./components/Molecules/PortfolioPage/PortfolioPage";

export default async function ThisIsPortfolioHome() {
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
        </Main>
      </div>
    </>
  );
}
