import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { domAnimation, LazyMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const TourDetails = lazy(() => import("./pages/PageDetail/TourDetails"));

function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tours/:id"
            element={(
              <Suspense fallback={null}>
                <TourDetails />
              </Suspense>
            )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </LazyMotion>
    </BrowserRouter>
  );
}

export default App;