import "./footer.css";

const footerLinks = {
  Product: [
    "Destinations",
    "Tours",
    "Experiences",
    "Activities",
  ],

  Company: [
    "About Us",
    "Contact",
    "FAQ",
  ],

  Social: [
    "Instagram",
    "Facebook",
    "WhatsApp",
  ],

  Legal: [
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

function Footer() {
  return (
    <footer className="footer">

      {/* Main footer content */}
      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <span className="logo-icon">◇</span>
            <span>Morocco Explore</span>
          </div>

          <p className="footer-description">
            Discover unforgettable experiences across Morocco.
            From the landscapes of Paradise Valley to the Atlantic
            coast of Taghazout, explore authentic destinations
            and unforgettable adventures.
          </p>

          <p className="footer-copyright">
            Morocco Explore © 2026
          </p>

        </div>


        {/* Footer columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div className="footer-column" key={title}>

            <h3>{title}</h3>

            {links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}

          </div>
        ))}

      </div>


      {/* Giant background text */}
      <div className="footer-watermark">
        MOROCCO
      </div>


      {/* Bottom bar */}
      {/* <div className="footer-bottom">

        <div className="footer-bottom-brand">

          <div className="footer-mini-logo">
            ◇
          </div>

          <span>
            Morocco Explore
          </span>

        </div>
 
         <span className="footer-credit">
          Explore Morocco • Travel Beyond
        </span> 

      </div> */}

    </footer>
  );
}

export default Footer;