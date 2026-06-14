import styles from "./AboutSection.module.css";

const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "10+", label: "Projects experience" },
  { value: "2+", label: "Products in production" },
];

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>About</p>
          <h2 className={styles.heading}>
            Engineering the gap between design and production
          </h2>
        </div>

        <div className={styles.right}>
          <p className={styles.body}>
            I&apos;m a Full stack engineer with a product mindset. My work spans
            component architecture, design systems, and performance engineering
            — with a growing focus on integrating AI capabilities directly into
            user-facing products.
          </p>
          <p className={styles.body}>
            I care about the details that most developers skip: transition
            timing, scroll behaviour, accessible markup, and bundle budgets.
            Good Full stack work is invisible — users just feel like the product
            makes sense.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
