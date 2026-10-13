import "./TourCard.css";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TourCard({ tour, searchCriteria }) {
  const navigate = useNavigate();

  const title = tour.title || "";
  const description = tour.description || "";
  const duration = tour.duration || "";
  const openTour = () => {
    const params = new URLSearchParams();
    if (searchCriteria.date) params.set("date", searchCriteria.date);
    if (searchCriteria.travelers) params.set("travelers", searchCriteria.travelers);
    const queryString = params.toString();
    navigate(`/tours/${tour.slug || tour.id}${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <article className="tour-card">

      <img
        src={tour.image}
        alt={title}
        width={tour.imageWidth}
        height={tour.imageHeight}
        className="tour-image"
        loading="lazy"
        decoding="async"
      />

      <div className="tour-overlay"></div>

      <button
        className="book-btn"
        onClick={openTour}
        aria-label={`Book ${title}`}
      >
        Book now
      </button>

      <button className="favorite-btn" aria-label={`Add ${title} to favorites`}>
        <Heart size={20} />
      </button>

      <div className="tour-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tour-tags">

          <span className="tag">
            <Star size={14} fill="white" />
            4.7
          </span>

          <span className="tag">
            {duration}
          </span>

        </div>

      </div>
    </article>
  );
}

export default TourCard;