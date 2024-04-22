import "./hero.scss";
import { motion } from "framer-motion";
import TusharMalhotra from "../../assets/ProfilePicTm.png";
const textEffectVariation = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const sliderTextVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-510%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const Hero = ({ work, contact }) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textEffectVariation}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textEffectVariation}>TUSHAR MALHOTRA</motion.h3>
          <motion.h1 variants={textEffectVariation}>
            Front-End Developer and UI designer
          </motion.h1>
          <motion.div variants={textEffectVariation} className="buttons">
            <a href={`#${work}`}>See my latest Work</a>
            <a
              href={`#${contact}`}
              style={{ backgroundColor: "lightcyan", color: "black" }}
            >
              Contact me
            </a>
          </motion.div>
          <motion.img
            variants={textEffectVariation}
            src="/scroll.png"
            animate="scrollButton"
            alt="Scroll Png"
          />
        </motion.div>
        <div className="profilePic">
          <img src={TusharMalhotra} alt="Profile Pic" />
        </div>
      </div>
      <motion.div
        className="slidingContainer"
        variants={sliderTextVariant}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/TusharMalhotra.png" alt="Tushar Malhotra" />
      </div>
    </div>
  );
};

export default Hero;
