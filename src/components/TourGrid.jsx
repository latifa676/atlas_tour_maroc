import { tours } from "../data/tours";
import TourCard from "./TourCard";
import "./TourGrid.css";

function TourGrid() {
  return (
    <section id="tours" className="tour-section">
      <div className="container">
        <div className="section-header">
          <div className="heading-wrapper">
          <span className="eyebrow">
            OUR EXPERIENCES
          </span>

          <h2>
            Discover your next adventure
          </h2>
         </div>
                 
          <p className="description">
            Explore unforgettable experiences and discover
            the beauty of Morocco.
          </p>
        </div>
        <div className="tour-grid">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourGrid;