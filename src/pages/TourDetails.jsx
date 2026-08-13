import { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../data/tours";
import "./TourDetails.css";
import { contact } from "../config/contact";
function TourDetails() {
  const { tourId } = useParams();

  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");

  const tour = tours.find(
    (tour) => tour.id === Number(tourId)
  );

  if (!tour) {
    return <h1>Excursion not found</h1>;
  }

  const {
    title,
    location,
    duration,
    price,
    image,
    description,
  } = tour;

  function handleBooking() {
    if (!date) {
      alert("Please select a preferred date.");
      return;
    }

    const message = `Hello, I would like to book:

Excursion: ${title}
Number of people: ${people}
Preferred date: ${date}

Thank you.`;

const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  message
)}`;

    
    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="tour-details">
      <div className="container">
        <div className="tour-details-image">
          <img src={image} alt={title} />
        </div>

        <div className="tour-details-content">
          <p className="tour-location">{location}</p>

          <h1>{title}</h1>

          <p className="tour-description">
            {description}
          </p>

          <div className="tour-details-info">
            <span>{duration}</span>
            <span>From {price} MAD</span>
          </div>

          <div className="booking-form">
            <h2>Book this excursion</h2>

            <div className="form-group">
              <label htmlFor="people">
                Number of people
              </label>

              <input
                id="people"
                type="number"
                min="1"
                value={people}
                onChange={(event) =>
                  setPeople(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">
                Preferred date
              </label>

              <input
                id="date"
                type="date"
                value={date}
                onChange={(event) =>
                  setDate(event.target.value)
                }
              />
            </div>

            <button
              type="button"
              onClick={handleBooking}
              className="primary-button"
            >
              Book on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TourDetails;