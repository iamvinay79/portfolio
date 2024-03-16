import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === parseInt(id));

  const handleClickGitHub = () => {
    const githubURL = "https://github.com/iamvinay79?tab=repositories";
    window.open(githubURL, "_blank");
  };

  if (!project) {
    return (
      <div>
        <h2>Project Not Found !!!!</h2>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { yoyo: Infinity },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 layout>{project.title}</motion.h1>
      <div className="project-container">
        <motion.div layout className="project-description-box">
          <motion.h6 layout>{project.description}</motion.h6>
        </motion.div>

        <motion.div layout className="project-description-box">
          <motion.h5 layout>
            <em>Keyfeatures</em> : {project.keyfeatures}
          </motion.h5>
        </motion.div>

        <motion.div layout className="project-description-box">
          <motion.span layout>
            <em>Tech Used</em> :{" "}
            {project.techUsed.map((tech, index) => (
              <motion.span key={index} layout>
                {tech}
                {index !== project.techUsed.length - 1 ? ", " : ""}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Live
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{ duration: 0.2 }}
          onClick={handleClickGitHub}
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          GitHub
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
