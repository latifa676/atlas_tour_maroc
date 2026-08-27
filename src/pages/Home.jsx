import Hero from "../components/Hero";
import TourGrid from "../components/TourGrid";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Hero />           
      <AboutUs />
      <TrustSection />
      <TourGrid />
      <Testimonials />
      <Footer />

    </main>
  );
}

export default Home;