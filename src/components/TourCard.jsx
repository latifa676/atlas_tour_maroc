import "./TourCard.css";
// import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
function TourCard({ tour }) {
  // const { id,title, location, duration, price, image, description } = tour;

//   return (
//     <article className="tour-card">
//       <img
//         src={image}
//         alt={title}
//         className="tour-image"
//       />

//       <div className="tour-content">
//         <p className="tour-location">{location}</p>

//         <h3>{title}</h3>

//         <p className="tour-description">
//           {description}
//         </p>

//         <div className="tour-info">
//           <span>{duration}</span>
//           <span>From {price} MAD</span>
//         </div>

//         <Link to={`/tours/${id}`} className="primary-button">
//           View Excursion
//         </Link>
//       </div>
//     </article>
//   );
// }
return (
    <article className="tour-card">

      <img
        src={tour.image}
        alt={tour.title}
        className="tour-image"
      />

      <div className="tour-overlay"></div>

      <button className="book-btn">
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