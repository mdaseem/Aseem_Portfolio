import React from "react";
import "./ProjectsContainer.css";
import ProjectTile from "../../Atoms/ProjectTiles/ProjectTile";

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
];

const ProjectContainer: React.FC = () => {
  return (
    <div className="project-container-main-content">
      {dataForTiles.map((tile) => (
        <ProjectTile
          key={tile.id}
          title={tile.title}
          description={tile.description}
        />
      ))}
    </div>
  );
};

export default ProjectContainer;
