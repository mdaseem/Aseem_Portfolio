"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

const ROLES = [
  "Frontend Developer",
  "UI Engineer",
  "React and Next.js Specialist",
  "AI-Driven Builder",
  "Full Stack Engineer",
];

const TYPEWRITER_SPEED = 80;
const ERASE_SPEED = 40;
const PAUSE_MS = 1800;

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isErasing && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPEWRITER_SPEED);
    } else if (!isErasing && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsErasing(true), PAUSE_MS);
    } else if (isErasing && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, ERASE_SPEED);
    } else if (isErasing && displayed.length === 0) {
      setIsErasing(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isErasing, roleIndex]);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Based in Bengaluru, India</p>
        <h1 className={styles.name}>Mohammed Aseem</h1>
        <div className={styles.roleRow}>
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor} aria-hidden="true" />
        </div>
        <p className={styles.tagline}>
          I build interfaces that feel obvious to use and hard to forget —
          <br />
          with a sharp eye on performance, scalability, and AI integration.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View Work
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get in Touch
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
