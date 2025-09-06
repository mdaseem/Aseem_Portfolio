"use client";
import React from "react";
import "./Menu.css";
import Link from "next/link";
import { menuClose, menuOpen } from "../../SVG/HamburgerSvg";

interface MenuProps {
  children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="hamburger-menu-container">
      {props.children}
      {!isMenuOpen ? (
        <button
          className={`menu-button ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(true)}
        >
          {menuOpen()}
        </button>
      ) : (
        menuClose(setIsMenuOpen)
      )}

      <div className={`menu-content ${isMenuOpen ? "visible" : ""}`}>
        <div className="menu-links">
          <div className="header-content">
            <nav className="header-nav">
              <Link href="/" className="header-link">{`Home`}</Link>
              <Link href="#" className="header-link">{`Projects`}</Link>
              <Link href="#" className="header-link">{`About`}</Link>
              <Link href="#" className="header-link">{`Contact`}</Link>
              <Link href="#resume" className="header-link">{`Resume`}</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
