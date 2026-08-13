import Hero from "../components/Hero";
import TourGrid from "../components/TourGrid";
import Galerie from "../components/Galerie";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <TourGrid />
      <Galerie />
      <Footer />

    </main>
  );
}

export default Home;