import React from "react";
import "./ProjectTile.css";

const ProjectTile: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <div className="project-tile">
      <div className="project-tile-main-content">
        <h2 className="project-tile-title">{props.title}</h2>
        <p className="project-tile-description">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
