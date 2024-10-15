import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import Works from "./pages/Works";
import IdentityPage from "./pages/IdentityPage";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/IdentityPage" element={<IdentityPage />} />
      </Routes>
     
    </Router>
  
     
  );
}

export default App;
