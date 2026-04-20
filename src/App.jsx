import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Listings from "./Pages/Listings";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ListYourself from "./Pages/List";
import "./App.css";

function App() {
  return (
    <Router basename="/FLATMATE-FINDER">
      <div className="app">

        <nav className="navbar">
          <div className="logo">🏠 FlatFinder</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/list-yourself" className="cta">
              List Yourself
            </Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/list-yourself" element={<ListYourself />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;