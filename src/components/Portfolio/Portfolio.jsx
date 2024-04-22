import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import image1 from "../../assets/Web1.png";
import image2 from "../../assets/Web2.png";
import image3 from "../../assets/Web3.png";
import image5 from "../../assets/Web5.png";
import image6 from "../../assets/Web6.png";
import image7 from "../../assets/Web7.png";
import image8 from "../../assets/Web8.png";
import image9 from "../../assets/Web9.png";
import { useRef } from "react";

const portfolios = [
  {
    id: 1,
    title: "Royate Restuarant",
    src: "https://tushar1471.github.io/royate_restuarant/",
    img: image1,
    code: "https://github.com/Tushar1471/royate_restuarant",
  },
  {
    id: 2,
    title: "Shoezy",
    src: "https://tushar1471.github.io/shoezy/",
    img: image2,
    code: "https://github.com/Tushar1471/shoezy",
  },
  {
    id: 3,
    title: "TIC TAC TOE",
    src: "https://tushar1471.github.io/tictactoe/",
    img: image3,
    code: "https://github.com/Tushar1471/tictactoe",
  },

  {
    id: 4,
    title: "Spotify Clone",
    src: "https://tushar1471.github.io/spotify_Clone/",
    img: image5,
    code: "https://github.com/Tushar1471/spotify_Clone",
  },
  {
    id: 5,
    title: "Amazon Clone",
    src: "https://tushar1471.github.io/amazon_clone/",
    img: image6,
    code: "https://github.com/Tushar1471/amazon_clone/",
  },
  {
    id: 6,
    title: "Tribute Page",
    src: "https://tushar1471.github.io/Tribute_Page/",
    img: image7,
    code: "https://github.com/Tushar1471/Tribute_Page/",
  },
  {
    id: 7,
    title: "Calculator",
    src: "https://tushar1471.github.io/calculator_CodSoft/",
    img: image8,
    code: "https://github.com/Tushar1471/calculator_CodSoft/",
  },
  {
    id: 8,
    title: "Landing Page",
    src: "https://tushar1471.github.io/landingPage/",
    img: image9,
    code: "https://github.com/Tushar1471/landingPage/",
  },
];

const SingleItem = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image_container" ref={ref}>
            <img src={item?.img} alt="All Photos" />
          </div>
          <motion.div className="text_container" style={{ y }}>
            <h1>{item?.title}</h1>
            <div className="links">
              <a href={`${item?.src}`} target="_blank">
                See Demo
              </a>
              <a href={`${item?.code}`} target="_blank">
                See Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <>
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Projects</h1>
          <motion.div style={{ scaleX }} className="progress_bar"></motion.div>
        </div>
        {portfolios.map((item) => (
          <SingleItem key={item?.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
