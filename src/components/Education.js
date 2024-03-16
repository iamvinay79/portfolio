import React from "react";
import { motion } from "framer-motion";
import "./Education.css";
import reactcertification from "../Assets/Reat.jscertificate.webp";
const Education = () => {
  const handleClickCretificationReactjs = () => {
    const githubURL = reactcertification;
    window.open(githubURL, "_blank");
  };

  const handleClickCretificationPython = () => {
    const link = "https://www.kaggle.com/learn/certification/vinayk2000/python";
    window.open(link, "_blank");
  };

  const handleClickCretificationJavaScript = () => {
    const link = "https://www.hackerrank.com/certificates/b2c63ab37382";
    window.open(link, "_blank");
  };
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education Details
      </motion.h1>

      <div className="education-container">
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Bachelor of Technology</h3>
          <p>
            BABU BANARASI DAS INSTITUTE OF TECHNOLOGY AND MANAGEMENT
            (2017-2021), Lucknow
          </p>
          <p>Percentage - 72.42%</p>
        </motion.div>

        <motion.div
          className="education-item"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3> XII Standard</h3>
          <p>Ratna Memorial Public School(RAMPUS) (2017), Gorakhpur</p>
          <p>Percentage - 60%</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>X Standard</h3>
          <p>Central Academy(2015), Gorakhpur</p>
          <p>Percentage - 76%</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3>Certificate :- {"Python"}</h3>
          <p>Kaggle</p>
          <p>2022</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickCretificationPython}
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
            Link
          </motion.button>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h3>Certificate :- {"React.js"}</h3>
          <p>Namaste React by Akshay Saini</p>
          <p>2023</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickCretificationReactjs}
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
            Link
          </motion.button>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h3>Certificate :- {"JavaScript"}</h3>
          <p>Hacker Rank</p>
          <p>2024</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickCretificationJavaScript}
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
            Link
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Education;
