import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTripadvisor,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-card">

        {/* Top Section: Brand & Links */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img
              src="src/assets/logo.png"
              alt="Morocco Excursions"
              className="logo-image"
              />
              {/* <span className="logo-icon">✦</span>
              <span className="brand-name">Agadir Adventures</span> */}
            </div>

            <p className="brand-tagline">
              Discover the beauty of Morocco with unforgettable excursions
              around Agadir. Explore nature, desert landscapes, beaches, and
              authentic Moroccan experiences with us.
            </p>

            <div className="social-links">
              <a
                href="#facebook"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="#tripadvisor"
                aria-label="TripAdvisor"
              >
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links-grid">

            {/* Explore */}
            <div className="link-column">
              <h4>Explore</h4>

              <ul>
                <li>
                  <a href="#tours">Our Tours</a>
                </li>

                <li>
                  <a href="#tours">Paradise Valley</a>
                </li>

                <li>
                  <a href="#tours">Desert Adventure</a>
                </li>

                <li>
                  <a href="#tours">Boat Trip</a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="link-column">
              <h4>Information</h4>

              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>

                <li>
                  <a href="#faq">FAQ</a>
                </li>

                <li>
                  <a href="#booking">How to Book</a>
                </li>

                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="link-column">
              <h4>Contact</h4>

              <ul>
                <li>
                  <a href="tel:+212600000000">
                    +212 6 00 00 00 00
                  </a>
                </li>

                <li>
                  <a href="mailto:info@agadiradventures.com">
                    info@agadiradventures.com
                  </a>
                </li>

                <li>
                  <span>Agadir, Morocco</span>
                </li>

                <li>
                  <a href="#contact">Book Your Adventure</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Agadir Adventures. All rights reserved.
          </p>

          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Large Watermark */}
      <div className="footer-watermark">
        Agadir
      </div>
    </footer>
  );
}

export default Footer;