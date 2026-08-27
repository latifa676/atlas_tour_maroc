import { motion } from "framer-motion";
import { tours } from "../data/tours";
import TourCard from "./TourCard";
import "./TourGrid.css";

function TourGrid() {
  return (
    <section id="tours" className="tour-section">
      <div className="container">

        <div className="section-header">

          <motion.div
            className="heading-wrapper"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">
              OUR EXPERIENCES
            </span>

            <h2>
              Discover your next adventure
            </h2>
          </motion.div>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Explore unforgettable experiences and discover
            the beauty of Morocco.
          </motion.p>

        </div>

        <motion.div
          className="tour-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default TourGrid;