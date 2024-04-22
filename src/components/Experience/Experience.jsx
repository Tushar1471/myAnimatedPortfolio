import "./experience.scss";
import { motion, useInView } from "framer-motion";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import Bootstrap from "../../assets/Bootstrap.png";
import github from "../../assets/github.png";
import graphql from "../../assets/graphql.png";
import mySql from "../../assets/mySql.png";
import frameMotion from "../../assets/motion.png";
import vercel from "../../assets/vercel.png";
import { useRef } from "react";

const variants = {
  initial: {
    x: "-50%",
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

const Experience = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: "-100px" });
  const technologies = [
    { id: 1, src: html, shadow: "red" },
    { id: 2, src: css, shadow: "blue" },
    { id: 3, src: js, shadow: "yellow" },
    { id: 4, src: node, shadow: "lightgreen" },
    { id: 5, src: react, shadow: "#3098ba" },
    { id: 6, src: tailwind, shadow: "cyan" },
    { id: 7, src: Bootstrap, shadow: "purple" },
    { id: 8, src: github, shadow: "white" },
    { id: 9, src: graphql, shadow: "#ba3065" },
    { id: 10, src: mySql, shadow: "skyblue" },
    { id: 11, src: frameMotion, shadow: "white" },
    { id: 12, src: vercel, shadow: "#f0f0f0" },
  ];
  return (
    <>
      <motion.div
        className="exp"
        initial="initial"
        ref={ref}
        animate={inView && "animate"}
      >
        <motion.h1 variants={variants} whileHover={{ color: "orange" }}>
          Experience
        </motion.h1>
        <motion.p variants={variants}>
          Here is a comprehensive list of the technologies I have experience
          working with:
        </motion.p>
        <motion.div className="wrapper" variants={variants}>
          {technologies.map((item) => (
            <motion.div
              variants={variants}
              style={{ boxShadow: `0px 5px 10px ${item?.shadow}` }}
              key={item?.id}
            >
              <img src={item.src} alt="All images" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Experience;
