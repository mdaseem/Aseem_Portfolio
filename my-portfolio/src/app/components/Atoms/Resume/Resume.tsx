"use client";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <button
        onClick={() => (window.location.href = "Mohammed_Aseem_Resume_Latest.docx")}
        className="download-link"
      >
        Download my Resume
      </button>
    </div>
  );
};

export default Resume;
