import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/Agencyidentity.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Excursions", href: "#tours" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const isTourDetail = pathname.startsWith("/tours/");
  const getNavigationHref = (href) => (isTourDetail ? `/${href}` : href);
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToBookingAfterMenuClose = useRef(false);

  useEffect(() => {
    const sectionId = location.state?.scrollToSection;
    if (!sectionId) return undefined;

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.key, location.state]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigationClick = (event, href) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    closeMobileMenu();
    navigate(
      { pathname: isTourDetail ? "/" : pathname, hash: href },
      { state: { scrollToSection: href.slice(1) } }
    );
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        isTourDetail ? "navbar--tour-detail" : ""
      }`}
    >

      <div className="container navbar-inner">

        {/* LOGO */}
        <motion.a
          href="/"
          className="logo"
          aria-label="Morocco Excursions"
          initial={{ opacity: 0, x: -70 }}
          animate={{
            opacity: 1,
            x: scrolled ? -4 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src={logoImage}
            alt="Morocco Excursions"
            width="201"
            height="43"
            className="logo-image"
          />
        </motion.a>


        {/* DESKTOP NAV */}
        <nav className="nav-desktop" aria-label="Main navigation">

          <ul className="nav-links">

            {navLinks.map(({ label, href }, i) => (

              <motion.li
                key={href}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <a
                  href={getNavigationHref(href)}
                  onClick={(event) => handleNavigationClick(event, href)}
                >

                  {label}

                  <span className="link-underline" />

                </a>

              </motion.li>

            ))}

          </ul>

        </nav>


        {/* ACTIONS */}
        <div className="navbar-actions">

          <motion.a
            href={isTourDetail ? "#booking" : "#tours"}
            className="primary-button"
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: scrolled ? 4 : 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Book Now
          </motion.a>


          {/* MOBILE BUTTON */}
          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}
      <AnimatePresence
        onExitComplete={() => {
          if (!scrollToBookingAfterMenuClose.current) return;

          scrollToBookingAfterMenuClose.current = false;
          document.getElementById("booking")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }}
      >

        {menuOpen && (

          <motion.div
            className="mobile-menu"
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <ul>

              {navLinks.map(({ label, href }, i) => (

                <motion.li
                  key={href}
                  initial={{
                    opacity: 0,
                    x: -35,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.08 * i + 0.12,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >

                  <a
                    href={getNavigationHref(href)}
                    onClick={(event) => handleNavigationClick(event, href)}
                  >
                    {label}
                  </a>

                </motion.li>

              ))}


              <motion.li
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.08 * navLinks.length + 0.12,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <a
                  href={isTourDetail ? "#booking" : "#tours"}
                  className="mobile-cta"
                  onClick={(event) => {
                    if (isTourDetail) {
                      if (
                        event.button !== 0 ||
                        event.metaKey ||
                        event.ctrlKey ||
                        event.shiftKey ||
                        event.altKey
                      ) {
                        return;
                      }

                      event.preventDefault();
                      scrollToBookingAfterMenuClose.current = true;
                      closeMobileMenu();
                      return;
                    }

                    handleNavigationClick(event, "#tours");
                  }}
                >
                  Book Now
                </a>

              </motion.li>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Navbar;