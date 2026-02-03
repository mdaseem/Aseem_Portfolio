import React from "react";
import "./Main.css";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <div>
      <main className="main-content"><>
      {/* <iframe id="projectFrame" src="https://go-renovate.vercel.app/" height={"100"}></iframe> */}
      {props.children}
      </>
      </main>
    </div>
  );
};

export default Main;
