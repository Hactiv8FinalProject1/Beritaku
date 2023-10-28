import { Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Covid19 from "./pages/Covid19";
import DetailsCovid19 from "./pages/DetailsCovid19";
import DetailsProgramming from "./pages/DetailsProgramming";
import DetailsIndo from "./pages/DetailsIndo";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/covid19" element={<Covid19 />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/detailscovid/:index" element={<DetailsCovid19 />} />
        <Route path="/detailsindo/:index" element={<DetailsIndo />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/detailsprogramming/:index" element={<DetailsProgramming />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
