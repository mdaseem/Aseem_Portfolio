import styles from "./ProjectsSection.module.css";

type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  highlight?: boolean;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Go Renovate",
    description:
      "This is my personal project where I am building a platform to connect homeowners with reliable renovation professionals. It features user authentication, project management, and real-time communication between users and contractors. note - This is still under development and expect new features are being added.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Google OAuth",
      "JWT",
      "Socket.io",
      "SEO",
    ],
    liveUrl: "https://gorenovate.in",
    githubUrl: "https://github.com/mdaseem/GoRenovate",
    highlight: true,
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Projects</p>
          <h2 className={styles.heading}>Selected work</h2>
        </div>

        <div className={styles.list}>
          {PROJECTS.map((project) => (
            <article key={project.index} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.index}>{project.index}</span>
                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
