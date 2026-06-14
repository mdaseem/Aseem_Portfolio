import styles from "./AISection.module.css";

const PILLARS = [
  {
    title: "AI in the development workflow",
    body: "I use AI tooling as a force multiplier — for code generation scaffolding, test writing, and rapid prototyping. It removes friction in repetitive work so more time goes into architecture and UX decisions.",
  },
  {
    title: "AI-powered product features",
    body: "I've shipped production features backed by language models: semantic search, intelligent form auto-fill, and context-aware onboarding. The engineering challenge is building reliable, low-latency UI around non-deterministic outputs.",
  },
  {
    title: "Human-centred AI UI",
    body: "AI features fail when the interface doesn't set the right expectations. I focus on progressive disclosure, confidence indicators, and graceful fallbacks — so the product feels trustworthy, not unpredictable.",
  },
];

export default function AISection() {
  return (
    <section className={styles.ai} id="ai">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.sectionLabel}>AI + Frontend</p>
          <h2 className={styles.heading}>
            How I work with artificial intelligence
          </h2>
          <p className={styles.sub}>
            AI is changing what frontend developers build and how they build it.
            I take both seriously.
          </p>
        </div>

        <div className={styles.right}>
          {PILLARS.map((pillar, i) => (
            <div key={i} className={styles.pillar}>
              <div className={styles.pillarIndex}>0{i + 1}</div>
              <div className={styles.pillarContent}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
