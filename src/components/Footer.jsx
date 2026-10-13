import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTripadvisor,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./footer.css";
import logoImage from "../assets/logo.webp";

function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isTourDetail = pathname.startsWith("/tours/");
  const bookingSection = isTourDetail ? "booking" : "tours";

  const homeSectionHref = (section) => pathname === "/" ? `#${section}` : `/#${section}`;
  const handleHomeSectionClick = (event, section) => {
    if (pathname === "/") return;
    event.preventDefault();
    navigate("/", { state: { scrollToSection: section } });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-card">

        {/* Top Section: Brand & Links */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img
              src={logoImage}
              alt="Morocco Excursions"
              width="1536"
              height="1024"
              className="logo-image"
              loading="lazy"
              decoding="async"
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
              <span aria-hidden="true">
                <FaFacebook size={20} />
              </span>

              <span aria-hidden="true">
                <FaInstagram size={20} />
              </span>

              <span aria-hidden="true">
                <FaWhatsapp size={20} />
              </span>

              <span aria-hidden="true">
                <FaTripadvisor size={20} />
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links-grid">

            {/* Explore */}
            <div className="link-column">
              <h4>Explore</h4>

              <ul>
                <li>
                  <a href={homeSectionHref("tours")} onClick={(event) => handleHomeSectionClick(event, "tours")}>Our Tours</a>
                </li>

                <li>
                  <Link to="/tours/paradise-valley">Paradise Valley</Link>
                </li>

                <li>
                  <Link to="/tours/agadir-desert-adventure">Desert Adventure</Link>
                </li>

                <li>
                  <Link to="/tours/agadir-boat-trip">Boat Trip</Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="link-column">
              <h4>Information</h4>

              <ul>
                <li>
                  <a href={homeSectionHref("about")} onClick={(event) => handleHomeSectionClick(event, "about")}>About Us</a>
                </li>

                <li>
                  <a href={homeSectionHref("tours")} onClick={(event) => handleHomeSectionClick(event, "tours")}>Tour Information</a>
                </li>

                <li>
                  <a
                    href={`#${bookingSection}`}
                    onClick={isTourDetail ? undefined : (event) => handleHomeSectionClick(event, bookingSection)}
                  >
                    How to Book
                  </a>
                </li>

                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="link-column" id="contact">
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
                  <a
                    href={`#${bookingSection}`}
                    onClick={isTourDetail ? undefined : (event) => handleHomeSectionClick(event, bookingSection)}
                  >
                    Book Your Adventure
                  </a>
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
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Cookie Policy</span>
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