import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const statsData = [
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Destinations' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '15+', label: 'Years Experience' },
];

// Stagger variant for text children
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        
        {/* SVG Path */}
        <svg className="flight-path-svg" viewBox="0 0 1000 400" fill="none">
          <motion.path 
            d="M -50,150 C 150,450 500,350 1050,-50" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

        {/* Top Content Grid */}
        <div className="about-grid">
          {/* Left Column */}
          <motion.div 
            className="text-content"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="about-title" variants={textItemVariants}>
              About Us
            </motion.h2>
            <motion.p className="about-description" variants={textItemVariants}>
              At Flygo, we believe travel is more than reaching a destination—it’s about

              the moments you collect along the way. Whether you’re seeking adventure,

              relaxation, or cultural immersion, we design journeys around what truly

              matters to you.            
            </motion.p>
            <motion.p className="about-description" variants={textItemVariants}>
              With expert planning, trusted global partners, and a passion for exploration,

              we make travel effortless, inspiring, and unforgettable.           
            </motion.p>
            <motion.button 
              className="btn-more-about" 
              variants={textItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More about
            </motion.button>
          </motion.div>

          {/* Right Column Images */}
          <div className="image-composition">
            <motion.div 
              className="main-image-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="src/assets/AboutUs.jpg" alt="Lake and Mountains" />
            </motion.div>

            <motion.div 
              className="overlay-image-card"
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="src/assets/paradise-valley.jpg" alt="Hiker in Desert" />
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-item"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}