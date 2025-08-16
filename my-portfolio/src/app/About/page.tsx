import React from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";

const About: React.FC = () => {
  return (
 <div className="about-page">
    <Header />
    {<Menu />}
 </div>
  );
};

export default About;
