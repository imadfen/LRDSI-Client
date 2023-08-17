import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Présentation from "./pages/Presentation";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PubEvents from "./pages/PubEvents";
import ClientLayout from "./components/ClientLayout";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="App">
      <ClientLayout
        isLargeScreen={isLargeScreen}
      >
        <Routes>
          <Route path="/" element={<Home isLargeScreen={isLargeScreen} />} />
          <Route path="/Presentation" element={<Présentation />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/pubevents" element={<PubEvents isLargeScreen={isLargeScreen} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ClientLayout>

      <ScrollToTop />
    </div>
  );
}

export default App;
