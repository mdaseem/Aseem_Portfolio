import styles from "./HeroSection.module.css";
import RoleInfo from "../RoleInfo/RoleInfo";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Based in Bengaluru, India</p>
        <h1 className={styles.name}>Mohammed Aseem</h1>
        <div className={styles.roleRow}>
          <span className={styles.role}>
            <RoleInfo />
          </span>
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
