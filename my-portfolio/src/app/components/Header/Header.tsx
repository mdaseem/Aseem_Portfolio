import React from "react";
import "./Header.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header-main">
      <div className="header-content">
        <h1 className="header-title">{`Aseem`}</h1>
        <nav className="header-nav">
            <Link href="/" className="header-link">{`Home`}</Link>
          <Link href="/About" className="header-link">{`About`}</Link>
          <Link href="/projects" className="header-link">{`Projects`}</Link>
          <Link href="/contact" className="header-link">{`Contact`}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
