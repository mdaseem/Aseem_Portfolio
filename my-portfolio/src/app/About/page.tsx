import React from "react";
import Header from "../components/Atoms/Header/Header";
import Menu from "../components/Atoms/Menu/Menu";

const About: React.FC = () => {
  return (
 <div className="about-page">
    {<Menu />}
    <Header />
 </div>
  );
};

export default About;
