import { ArrowRight, ArrowUpRight } from "lucide-react";
import { destinations } from "../data/destinations";
import "./DestinationSection.css";

function DestinationCard({ destination }) {
  const {
    name,
    category,
    description,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    featured
  } = destination;

  return (
    <a
      className={`destination-card${featured ? " destination-card--featured" : ""}`}
      href="#tours"
      aria-label={`Explore ${name}: ${description}`}
    >
      <img
        className="destination-card__image"
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
      />
      <span className="destination-card__overlay" aria-hidden="true" />
      <span className="destination-card__content">
        <span className="destination-card__text">
          <span className="destination-card__category">{category}</span>
          <span className="destination-card__name">{name}</span>
        </span>
        <span className="destination-card__link" aria-hidden="true">
          <ArrowUpRight size={17} />
        </span>
      </span>
    </a>
  );
}

export default function DestinationSection() {
  const marqueeDestinations = [...destinations, ...destinations];

  return (
    <section className="destination-section" id="destinations" aria-labelledby="destinations-title">
      <div className="destination-section__inner">
        <header className="destination-section__header">
          <h2 id="destinations-title">Plan Your Next Trip With Confidence And Ease</h2>
          <p className="destination-section__description">
            Find the right destination for your next Moroccan adventure.
          </p>
          <a className="destination-section__cta" href="#tours">
            Start Your Trip <ArrowRight size={16} aria-hidden="true" />
          </a>
        </header>

        <div className="destination-marquee" aria-label="Featured destinations">
          <div className="destination-track">
            {marqueeDestinations.map((destination, index) => (
              <DestinationCard key={`${destination.name}-${index}`} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
