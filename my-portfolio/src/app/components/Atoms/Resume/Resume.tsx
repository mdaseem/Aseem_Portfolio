"use client";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <button
        onClick={() => (window.location.href = "Aseem_Updated-Resume.pdf")}
        className="download-link"
      >
        Download my Resume
      </button>
    </div>
  );
};

export default Resume;
