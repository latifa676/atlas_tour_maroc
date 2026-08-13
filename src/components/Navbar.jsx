import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Excursions", href: "#tours" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

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
            src="src/assets/logo.png"
            alt="Morocco Excursions"
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

                <a href={href}>

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
            href="#booking"
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
            aria-label="Toggle menu"
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
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-menu"
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
                    href={href}
                    onClick={() => setMenuOpen(false)}
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
                  href="#booking"
                  className="mobile-cta"
                  onClick={() => setMenuOpen(false)}
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