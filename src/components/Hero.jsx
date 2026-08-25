import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] },
  },
};

function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -50]
  );

  const titleLine1 = "Discover Morocco's Wild Beauty,";
  const titleLine2 = "One Adventure at a Time";

  return (
    <section className="hero" id="home" ref={heroRef}>
      <motion.div
        className="hero-bg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        style={{ x: backgroundX }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      <div className="hero-overlay" />
      <div className="hero-feather"></div>

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
    >
  <motion.h1
    variants={titleContainer}
    initial="hidden"
    animate="visible"
    aria-label={`${titleLine1} ${titleLine2}`}
  >
 <span className="title-line">
  {titleLine1.split(" ").map((word, i) => (
    <motion.span
      key={i}
      className="title-word"
      variants={titleWord}
    >
      {word}&nbsp;
    </motion.span>
  ))}
</span>

<span className="title-line">
  {titleLine2.split(" ").map((word, i) => (
    <motion.span
      key={i}
      className="title-word"
      variants={titleWord}
    >
      {word}&nbsp;
    </motion.span>
  ))}
</span>
  </motion.h1>
        <motion.p className="hero-description" variants={item}>
          From the golden dunes of the Sahara to the emerald pools of Paradise
          Valley explore breathtaking landscapes and hidden gems with expert
          local guides.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a href="#tours" className="primary-button">
            Explore Excursions
          </a>
          <a href="#booking" className="secondary-button">
            Book Your Adventure
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          className="scroll-dot"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
    </section>
  );
}

export default Hero;