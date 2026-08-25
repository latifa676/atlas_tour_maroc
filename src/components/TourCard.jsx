import "./TourCard.css";
// import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TourCard({ tour }) {
  const navigate = useNavigate();

return (
    <article className="tour-card">

      <img
        src={tour.image}
        alt={tour.title}
        className="tour-image"
      />

      <div className="tour-overlay"></div>

      <button
        className="book-btn"
        onClick={() => navigate(`/tours/${tour.id}`)}
      >
        Book now
      </button>

      <button className="favorite-btn">
        <Heart size={20} />
      </button>
      
      
          <div className="tour-content">

            <h3>{tour.title}</h3>

            <p>{tour.description}</p>

            <div className="tour-tags">

              <span className="tag">
                <Star size={14} fill="white" />
                4.7
              </span>

              <span className="tag">
                {tour.duration}
              </span>

            </div>

        </div>
    </article>
  );
}
export default TourCard;