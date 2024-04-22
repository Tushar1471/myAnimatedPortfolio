import { motion } from "framer-motion";
import "../sidebar.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      // delay: 0.02,
    },
  },
  closed: {
    y: 50,
    opacity: 0.25,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const Links = () => {
  const items = [
    "Homepage",
    "Experience",
    "Projects",
    "Certificates",
    "Contact",
  ];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
