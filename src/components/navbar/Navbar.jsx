import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  const nameEffect = {
    hidden: { opacity: 0, x: -50, scale: 0 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    transition: { duration: 2 },
  };
  return (
    <div className="navbar">
      <div>
        <SideBar />
      </div>
      <div className="wrapper">
        <motion.span
          initial="hidden"
          animate="visible"
          transition="transition"
          variants={nameEffect}
        >
          Tushar Malhotra
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/tushar.malhotra.796569">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/iam_tusharmalhotra/">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UC5FQWeKs8bL2mqHSt0MW7lg">
            <img src="/youtube.png" alt="Youtube" />
          </a>
          <a href="https://www.linkedin.com/in/tusharmalhotra-02573719b/">
            <img src="/linkedIn.png" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/im_TusHaR_m">
            <img src="/twitterX.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
