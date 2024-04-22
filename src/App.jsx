import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero work="Projects" contact="Contact" />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Certificates">
        <Parallax type="certifications" />
      </section>
      <section id="certificates">
        <Certification />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
