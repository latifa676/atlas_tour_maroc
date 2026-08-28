import "./Galerie.css";
import saharaImage from "../assets/sahara.png";
import medinaImage from "../assets/medina.png";
import essaouiraImage from "../assets/essaouira.png";
import soukImage from "../assets/souk.png";

const destinations = [
  {
    id: 1,
    title: "Sahara Desert Expedition",
    location: "Erg Chebbi, Merzouga",
    image: saharaImage,
    className: "card card-sahara",
  },
  {
    id: 2,
    title: "Ancient Medina Walk",
    location: "Aït Ben Haddou",
    image: medinaImage,
    className: "card card-medina",
  },
  {
    id: 3,
    title: "Atlas Mountain Trail",
    location: "Atlas Mountains",
    image: essaouiraImage,
    className: "card card-atlas",
  },
  {
    id: 4,
    title: "Coastal Wind City Tour",
    location: "Essaouira",
    image: soukImage,
    className: "card card-coastal",
  },
  // {
  //   id: 5,
  //   title: "Imperial City Heritage Tour",
  //   location: "Morocco",
  //   image: "src/assets/BenYoussef.png",
  //   className: "card card-imperial",
  // },
];

function Galerie() {
  return (
    <section  className="adventures">
    <div className="container">
      <div className="adventures-header">

        <div className="heading-wrapper">
          <span className="eyebrow">
            Top Destinations
          </span>

          <h2>
            Moroccan Adventures
          </h2>
        </div>

        <p className="description">
          Extraordinary natural beauty, rich cultural heritage, and the warmth
          of local people — Morocco is a destination unlike any other.
        </p>

      </div>


      <div className="destinations-grid">

        {destinations.map((destination) => (

          <article
            key={destination.id}
            className={destination.className}
          >

            <img
              src={destination.image}
              alt={destination.title}
            />

            <div className="image-overlay"></div>

            <div className="card-info">

              <span>
                {destination.location}
              </span>

              <h3>
                {destination.title}
              </h3>

            </div>

          </article>

        ))}

      </div>
    </div>
    </section>
  );
}

export default Galerie;