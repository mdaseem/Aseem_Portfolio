"use client";
import React from "react";
import "./ProjectsContainer.css";
import ProjectTile from "../../Atoms/ProjectTiles/ProjectTile";
import FadeIn from "../../HOC/FadeIn/FadeIn";

const dataForTiles = [
  {
    id: 1,
    title: "Go Renovate",
    description:
      "I have worked on an e-commerce website using React and Node.js.",
  },
  {
    id: 2,
    title: "Banking App",
    description: "I have worked on a banking app using React and .NET.",
  },
  {
    id: 3,
    title: "Udemy Clone",
    description:
      "I have worked on a Udemy clone using React and Node.js, express, and MongoDB.",
  },
];

const ProjectContainer: React.FC = () => {
  return (
    <section className="project-container-main-content">
      {dataForTiles.map((tile) => (
        <div key={tile.id} className="project-tile-item">
          <FadeIn key={tile.id} delay={`${0.1}s`}>
            <ProjectTile
              key={tile.id}
              title={tile.title}
              description={tile.description}
            />
          </FadeIn>
        </div>
      ))}
    </section>
  );
};

export default ProjectContainer;
