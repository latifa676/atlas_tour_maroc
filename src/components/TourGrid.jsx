import { m } from "framer-motion";
import { tours } from "../data/tours";
import TourCard from "./TourCard";
import "./TourGrid.css";

function TourGrid({ searchCriteria, onClearSearch }) {
  const destinationQuery = searchCriteria.destination.toLocaleLowerCase();
  const filteredTours = tours.filter((tour) => {
    if (!destinationQuery) return true;
    const searchableText = [
      tour.title,
      tour.location,
      tour.description,
      tour.longDescription,
      tour.slug
    ].join(" ").toLocaleLowerCase();
    return searchableText.includes(destinationQuery);
  });

  return (
    <section id="tours" className="tour-section">
      <div className="container">

        <div className="section-header">

          <m.div
            className="heading-wrapper"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">
              OUR EXPERIENCES
            </span>

            <h2>{destinationQuery ? `Tours for “${searchCriteria.destination}”` : "Discover your next adventure"}</h2>
          </m.div>

          <m.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Explore unforgettable experiences and discover
            the beauty of Morocco.
          </m.p>

        </div>

        {destinationQuery && (
          <div className="tour-search-status" aria-live="polite">
            <p>
              {filteredTours.length
                ? `${filteredTours.length} ${filteredTours.length === 1 ? "tour" : "tours"} found`
                : `No tours found for “${searchCriteria.destination}”.`}
            </p>
            <button type="button" onClick={onClearSearch}>Clear destination filter</button>
          </div>
        )}

        <m.div
          className="tour-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              searchCriteria={searchCriteria}
            />
          ))}
        </m.div>

      </div>
    </section>
  );
}

export default TourGrid;