import styles from "./ExperienceSection.module.css";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

const EXPERIENCES: Experience[] = [
  {
    role: "Packaged app development analyst",
    company: "Accenture",
    period: "2023 — Present",
    location: "Bengaluru",
    points: [
      "Owned a micro-frontend app from requirements to quarterly delivery planning.",
      "Delivered features with React, Context API, Custom Hooks, HOCs, Error Boundaries, and JWT, boosting security and maintainability. Revamped authentication flow from manual to OAUTH in FE which reduced login time by 25%",
      "Led code reviews, enforced best practices, and applied TDD with Jest for 90%+ coverage.",
      "Enhanced backend with .NET Core, API debugging, and dependency injection.",
      "Resolved critical production bugs requiring architecture-level insight.",
      "Contributed to Docker config updates with the DevOps team.",
    ],
  },
  {
    role: "Experience Technology L1",
    company: "Publicis Sapient",
    period: "2021 — 2023",
    location: "Bengaluru",
    points: [
      "Built and optimized a real-time eCommerce platform in Next.js, cutting page load times by 30%.",
      "Integrated Redux & Redux-Saga for scalable features, boosting delivery speed by 20%.",
      "Developed reusable HOCs and styled components, ensuring UI consistency and reducing duplicate code by 40%.",
      "Increased test coverage from 70% to 80% with Jest unit tests.Partnered with backend, QA, and analytics teams for seamless, aligned deployments.",
      "Fixed SEO issues, improving search rankings for key product pages.",
      "Documented business logic, improving sprint estimation accuracy by 25%.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Publicis Sapient",
    period: "2021 — 2021",
    location: "Bengaluru",
    points: [
      "Worked on an internal project with just vanialla js, HTML and CSS for rewarding the employees of the company.",
      "Collaborated with the team to implement a responsive design system, ensuring a consistent user experience across devices.",
      "From desigining to implementing the project, I was involved in the entire development lifecycle, gaining valuable experience in project management and teamwork.",
      "Created UX flows and wireframes to effectively communicate design ideas and gather feedback from stakeholders.",
      "Implemented features, best practices, and optimizations to enhance the performance and usability of the application.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Experience</p>
          <h2 className={styles.heading}>Where I&apos;ve worked</h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.meta}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.location}>{exp.location}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((point, j) => (
                    <li key={j} className={styles.point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
