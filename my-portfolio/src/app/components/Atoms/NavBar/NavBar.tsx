"use client";

import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a href="#home" className={styles.logo} aria-label="Back to top">
          My Portfolio
        </a>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuBtn}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ""}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ""}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          className={styles.mobileMenu}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileLinks} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
