import React from "react";
import "./Main.css";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <div>
      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default Main;
