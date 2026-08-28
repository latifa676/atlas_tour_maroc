import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";



function App() {

  return (
    <>
    <Navbar />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </BrowserRouter>
      
    </>
  );
}
 

export default App;