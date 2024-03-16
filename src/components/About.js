import React from "react";
import { motion } from "framer-motion";
import image from "../Assets/img.png";
import "./About.css";
import { ReactTyped } from "react-typed";
import { IoIosMailUnread } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import resume from "../Assets/Vinay's Resume.pdf";

const About = () => {
  const handleClickResumeDownlode = () => {
    const resumeURL = resume;
    window.open(resumeURL, "_blank");
  };

  const handleClickGitHub = () => {
    const githubURL = "https://github.com/iamvinay79";
    window.open(githubURL, "_blank");
  };

  const handleClickHireMe = () => {
    const phoneNumber = "+1234567890";
    window.open(`tel:${phoneNumber}`);
  };

  const handleClickMail = () => {
    const emailAddress = "kumarvk9352@gmail.com";
    const subject = "Interview Schedule (React Developer)";
    const body = " ";

    const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailToLink);
  };

  const handleClickLinkedIn = () => {
    const linkedInURL = "https://www.linkedin.com/in/vinay79/";
    window.open(linkedInURL, "_blank");
  };

  const handleClickleetCode = () => {
    const leetCodeURL = "https://leetcode.com/kumarvinay7984/";
    window.open(leetCodeURL, "_blank");
  };

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me!!
      </motion.h1>
      <motion.div
        className="container-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="container-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="into">
            I'm a{" "}
            <ReactTyped
              strings={[
                "Vinay Kumar",
                "React.js Developer",
                "Frontend Developer",
              ]}
              typeSpeed={300}
              loop
              backSpeed={200}
              cursorChar=">"
              showCursor={true}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hello! 👋 My name is Vinay Kumar, and I'm an aspiring React
            developer eager to dive into the world of web development. I'm
            enthusiastic about creating dynamic and engaging web applications
            that leave a lasting impression on users. If you're searching for a
            driven and adaptable team member who is eager to tackle challenges
            head-on and contribute to your organization's success, look no
            further. Let's join forces and create something extraordinary
            together!
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickResumeDownlode}
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
            Resume
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: 5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickHireMe}
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
            Hire me !!
          </motion.button>

          <div className="social-icon">
            <motion.div
              className="circle"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickMail}
            >
              <IoIosMailUnread style={{ color: "red", fontSize: "3rem" }} />
            </motion.div>
            <motion.div
              className="circle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickleetCode}
            >
              <SiLeetcode style={{ color: "black", fontSize: "3rem" }} />
            </motion.div>
            <motion.div
              className="circle"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickGitHub}
            >
              <FaGithub style={{ color: "black", fontSize: "3rem" }} />
            </motion.div>
            <motion.div
              className="circle"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickLinkedIn}
            >
              <FaLinkedin style={{ color: "blue", fontSize: "3rem" }} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="container-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={image} alt="image" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
