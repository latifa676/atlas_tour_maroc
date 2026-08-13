import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/:tourId" element={<TourDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;