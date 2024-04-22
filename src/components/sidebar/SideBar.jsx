import "./sidebar.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./Links/Links";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px )",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(20px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const constrainedVariants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(max(20px, 20px) at 50px 50px)", // Ensure radius is at least 20px
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};
const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={constrainedVariants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
