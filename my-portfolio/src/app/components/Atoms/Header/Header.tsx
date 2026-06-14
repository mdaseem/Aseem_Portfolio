import React from "react";
import "./Header.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header-main">
      <div className="header-content">
        <nav className="header-nav">
          <Link href="/" className="header-link">{`Home`}</Link>
          <Link href="#" className="header-link">{`Projects`}</Link>
          <Link href="#" className="header-link">{`Contact`}</Link>
          <Link href="#resume" className="header-link">{`Resume`}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
