import styles from "./SkillsSection.module.css";

type SkillGroup = {
  category: string;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Core",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES2022+)",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    category: "Styling & UI",
    items: ["CSS Modules", "Tailwind CSS"],
  },
  {
    category: "State & Data",
    items: ["Context API", "Redux Toolkit", "GraphQL", "Apollo Client"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Storybook"],
  },
  {
    category: "Tooling",
    items: ["Vite", "Webpack", "ESLint / Prettier"],
  },
  {
    category: "AI Integration",
    items: [
      "Vercel AI SDK",
      "OpenAI API",
      // "LangChain.js",
      "Prompt Engineering",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Skills</p>
          <h2 className={styles.heading}>What I work with</h2>
        </div>

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
