import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Offer from "./components/Offer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/offer">Offer</link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
