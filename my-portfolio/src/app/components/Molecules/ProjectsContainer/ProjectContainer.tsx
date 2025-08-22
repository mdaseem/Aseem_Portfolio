'use client';
import React from "react";
import "./ProjectsContainer.css";
import ProjectTile from "../../Atoms/ProjectTiles/ProjectTile";
import FadeIn from "../../HOC/FadeIn/FadeIn";

const dataForTiles = [
  {
    id: 1,
    title: "E-commerce Website",
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



   {
    id: 4,
    title: "Udemy Clone",
    description:
      "I have worked on a Udemy clone using React and Node.js, express, and MongoDB.",
  },
   {
    id: 5,
    title: "Udemy Clone",
    description:
      "I have worked on a Udemy clone using React and Node.js, express, and MongoDB.",
  },
   {
    id: 6,
    title: "Udemy Clone",
    description:
      "I have worked on a Udemy clone using React and Node.js, express, and MongoDB.",
  },
   {
    id: 7,
    title: "Udemy Clone",
    description:
      "I have worked on a Udemy clone using React and Node.js, express, and MongoDB.",
  },
   {
    id: 8,
    title: "Udemy Clone",
    description:
      "I have worked on a Udemy clone using React and Node.js, express, and MongoDB.",
  },
];

const ProjectContainer: React.FC = () => {
  return (
    <div className="project-container-main-content">
      {dataForTiles.map((tile) => (
        <FadeIn key={tile.id} delay={`${tile.id * 0.1}s`}>
          <ProjectTile
            key={tile.id}
            title={tile.title}
            description={tile.description}
          />
        </FadeIn>
      ))}
    </div>
  );
};

export default ProjectContainer;
