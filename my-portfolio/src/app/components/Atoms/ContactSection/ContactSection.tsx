import styles from "./ContactSection.module.css";

const LINKS = [
  { label: "GitHub", href: "https://github.com/mdaseem" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-aseem-652076190",
  },
  { label: "Resume", href: "/Aseem_Updated-Resume.pdf" },
];

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 className={styles.heading}>Let&apos;s work together</h2>
          <p className={styles.body}>
            I&apos;m open to senior fullstack roles, contract work, and
            conversations about interesting problems. If you&apos;re building
            something that deserves a sharp fullstack experience — reach out.
          </p>
          <a
            href="mailto:mdaseem459@gmail.com"
            className={styles.email}
            aria-label="Send email"
          >
            mdaseem459@gmail.com
          </a>
        </div>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={styles.linkItem}
            >
              <span>{link.label}</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Designed and built by Mohammed Aseem &mdash;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
