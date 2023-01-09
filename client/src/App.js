import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Bio } from "./components/Bio/Bio";
import { Photos } from "./components/Photos/Photos";
import { Performances } from "./components/Performances/Performances";
import { Contact } from "./components/Contact/Contact";
import { Videos } from "./components/Videos/Videos";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col items-center justify-between min-h-screen">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
