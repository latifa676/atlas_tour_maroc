import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import "./TrustSection.css";


const testimonials = [
  {
    id: 1,
    image: "src/assets/enjoy.png",
    name: "Mia Putri",
    text: "An amazing experience! Sunrise and trails were absolutely stunning.",
    rotate: "5deg",
    index: "1",
  },
  {
    id: 2,
    image: "src/assets/enjoy2.png",
    name: "Ahmad Fouzi",
    text: "Sunrise was incredible and guides were so helpful.",
    rotate: "-7deg",
    index: "2",
  },
  {
    id: 3,
    image: "src/assets/enjoy3.png",
    name: "Alya Rahman",
    text: "Breathtaking views and unforgettable memories.",
    rotate: "0deg",
    index: "3",
  },
  {
    id: 4,
    image: "src/assets/enjoy4.png",
    name: "Rizky Aditya",
    text: "Professional guides and stunning scenery.",
    rotate: "7deg",
    index: "2",
  },
  {
    id: 5,
    image: "src/assets/enjoy5.png",
    name: "Siti Nurhaliza",
    text: "Every moment was magical. Highly recommended.",
    rotate: "-6deg",
    index: "1",
  },
];


function TrustSection() {

  const sectionRef = useRef(null);


  /*
  =====================================================
  SCROLL PROGRESS
  =====================================================
  */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  /*
  =====================================================
  ANIMATION RANGE

  0.20
  → cards are still completely stacked

  0.55
  → cards have reached their final positions
  =====================================================
  */

  const animationRange = [0.20, 0.55];


  /*
  =====================================================
  CARD 1
  =====================================================
  */

  const card1X = useTransform(
    scrollYProgress,
    animationRange,
    [0, -500]
  );

  const card1Y = useTransform(
    scrollYProgress,
    animationRange,
    [0, 60]
  );

  const card1Rotate = useTransform(
    scrollYProgress,
    animationRange,
    [0, 5]
  );


  /*
  =====================================================
  CARD 2
  =====================================================
  */

  const card2X = useTransform(
    scrollYProgress,
    animationRange,
    [0, -250]
  );

  const card2Y = useTransform(
    scrollYProgress,
    animationRange,
    [0, 15]
  );

  const card2Rotate = useTransform(
    scrollYProgress,
    animationRange,
    [0, -7]
  );


  /*
  =====================================================
  CARD 3 — CENTER
  =====================================================
  */

  const card3X = useTransform(
    scrollYProgress,
    animationRange,
    [0, 0]
  );

  const card3Y = useTransform(
    scrollYProgress,
    animationRange,
    [0, -20]
  );

  const card3Rotate = useTransform(
    scrollYProgress,
    animationRange,
    [0, 0]
  );


  /*
  =====================================================
  CARD 4
  =====================================================
  */

  const card4X = useTransform(
    scrollYProgress,
    animationRange,
    [0, 250]
  );

  const card4Y = useTransform(
    scrollYProgress,
    animationRange,
    [0, 15]
  );

  const card4Rotate = useTransform(
    scrollYProgress,
    animationRange,
    [0, 7]
  );


  /*
  =====================================================
  CARD 5
  =====================================================
  */

  const card5X = useTransform(
    scrollYProgress,
    animationRange,
    [0, 500]
  );

  const card5Y = useTransform(
    scrollYProgress,
    animationRange,
    [0, 60]
  );

  const card5Rotate = useTransform(
    scrollYProgress,
    animationRange,
    [0, 5]
  );


  /*
  =====================================================
  STORE ALL CARD ANIMATIONS
  =====================================================
  */

  const cardAnimations = [
    {
      x: card1X,
      y: card1Y,
      rotate: card1Rotate,
    },

    {
      x: card2X,
      y: card2Y,
      rotate: card2Rotate,
    },

    {
      x: card3X,
      y: card3Y,
      rotate: card3Rotate,
    },

    {
      x: card4X,
      y: card4Y,
      rotate: card4Rotate,
    },

    {
      x: card5X,
      y: card5Y,
      rotate: card5Rotate,
    },
  ];


  /*
  =====================================================
  RENDER
  =====================================================
  */

  return (

    <section
      ref={sectionRef}
      className="testimonials"
    >


      {/* ================================================
          TITLE
      ================================================= */}

      <motion.div
        className="section-title"

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}

        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <h2>
          Moments that made every journey unforgettable
        </h2>

        <p>
          Relive every sunrise, trail and unforgettable adventure with
          professional photography that preserves your memories forever.
        </p>

      </motion.div>


      {/* ================================================
          CARDS
      ================================================= */}

      <div className="cards">

        {testimonials.map((item, index) => {

          const animation = cardAnimations[index];

          return (

            <motion.div
              key={item.id}

              className="testimonial-card"

              style={{
                x: animation.x,
                y: animation.y,
                rotate: animation.rotate,

                zIndex: item.index,
              }}
            >

              <img
                src={item.image}
                alt={item.name}
              />

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}


export default TrustSection;