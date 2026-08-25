import './AboutUs.css';

const statsData = [
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Destinations' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '15+', label: 'Years Experience' },
];

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        {/* Curved Dashed Background Flight Path SVG */}
        <svg 
          className="flight-path-svg" 
          viewBox="0 0 1000 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M -50,150 C 150,450 500,350 1050,-50" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
          />
        </svg>

        {/* Paper Plane Graphic along the path */}
        <div className="paper-plane-wrapper">
          <svg 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#94a3b8" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>

        {/* Top Content Grid */}
        <div className="about-grid">
          {/* Left Text Column */}
          <div className="text-content">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              At Flygo, we believe travel is more than reaching a destination—it’s about
              the moments you collect along the way. Whether you’re seeking adventure,
              relaxation, or cultural immersion, we design journeys around what truly
              matters to you.
            </p>
            <p className="about-description">
              With expert planning, trusted global partners, and a passion for exploration,
              we make travel effortless, inspiring, and unforgettable.
            </p>
            <button className="btn-more-about">
              More about
            </button>
          </div>

          {/* Right Images Column */}
          <div className="image-composition">
            {/* Background Main Image (Lake & Mountains) */}
            <div className="main-image-card">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800" 
                alt="Lake and Mountains" 
              />
            </div>

            {/* Foreground Tilted Image (Desert Hiker) */}
            <div className="overlay-image-card">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" 
                alt="Hiker in Desert" 
              />
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}