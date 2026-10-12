import { useState } from "react";
import Hero from "../components/Hero";
import DestinationSection from "../components/DestinationSection";
import TourGrid from "../components/TourGrid";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import TrustSection from "../components/TrustSection";
import SEO from "../components/SEO";
import heroImage from "../assets/Hero.webp";

function Home() {
  const [searchCriteria, setSearchCriteria] = useState({
    destination: "",
    date: "",
    travelers: "2"
  });

  return (
    <>
      <SEO
        title="Morocco Excursions | Agadir Tours & Adventures"
        description="Explore Agadir, Morocco with local-guided excursions to Paradise Valley, the Sahara, Taghazout and the Atlantic coast."
        image={heroImage}
      />
      <main>
        <Hero onSearch={setSearchCriteria} />
        <DestinationSection />
        <TourGrid
          searchCriteria={searchCriteria}
          onClearSearch={() => setSearchCriteria((current) => ({ ...current, destination: "" }))}
        />
        <TrustSection />
        <AboutUs />
        <Testimonials />
      </main>
    </>
  );
}

export default Home;