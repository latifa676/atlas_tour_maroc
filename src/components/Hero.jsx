import { m } from "framer-motion";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import hero from "../assets/Hero_landscape.webp";
import "./Hero.css";

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const headlineLines = ["Your Moroccan Adventure", "Starts Here"];

function Hero({ onSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchCriteria = {
      destination: String(formData.get("destination") || "").trim(),
      date: String(formData.get("date") || ""),
      travelers: String(formData.get("persons") || "2")
    };

    onSearch(searchCriteria);
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  const today = new Date();
  const minimumDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  return (
    <section className="hero" id="home">
      <img
        className="hero-bg"
        src={hero}
        alt=""
        aria-hidden="true"
        width="1440"
        height="800"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <m.div
        className="hero-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >

        <h1>
          {headlineLines.map((line) => (
            <span className="hero-title-line" key={line}>{line}</span>
          ))}
        </h1>

        <m.p className="hero-description" variants={itemVariants}>
          Discover the Sahara, Atlas Mountains, Paradise Valley and Morocco&apos;s
          hidden gems with local expert guides.
        </m.p>

        <m.form
          className="hero-search"
          variants={itemVariants}
          onSubmit={handleSearch}
        >
          <label className="hero-search__field">
            <MapPin size={18} aria-hidden="true" />
            <input
              type="search"
              name="destination"
              placeholder="Where to next?"
              aria-label="Destination"
            />
          </label>

          <label className="hero-search__field">
            <CalendarDays size={18} aria-hidden="true" />
            <input
              type="date"
              name="date"
              min={minimumDate}
              aria-label="Pick your dates"
            />
          </label>

          <label className="hero-search__field hero-search__field--travelers">
            <Users size={18} aria-hidden="true" />
            <select name="persons" aria-label="Number of persons" defaultValue="2">
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? "Person" : "Persons"}
                </option>
              ))}
            </select>
          </label>

          <button className="hero-search__submit" type="submit">
            <span>Find my trip</span>
            <Search size={16} aria-hidden="true" />
          </button>
        </m.form>

        {/* <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#tours" className="hero-button hero-button--primary">
            Explore Excursions
          </a>
          <a href="#about" className="hero-button hero-button--secondary">
            Discover Morocco
          </a>
        </motion.div> */}

        {/* <motion.div className="hero-trust" variants={itemVariants}>
          <span className="hero-trust__stars" aria-label="Five-star traveler reviews">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
            ))}
          </span>
          <span><strong>10,000+</strong> Happy Travelers</span>
        </motion.div> */}
      </m.div>

      {/* <a className="scroll-indicator" href="#destinations" aria-label="Explore Morocco">
        <span>Explore Morocco</span>
        <ArrowDown size={17} aria-hidden="true" />
      </a> */}
    </section>
  );
}

export default Hero;
