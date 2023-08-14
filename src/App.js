import React from "react";
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
import Présentation from "./pages/Présentation";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PubEvents from "./pages/PubEvents";
import ClientLayout from "./components/ClientLayout";
import Test from "./Test.js";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      <ClientLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/pubevents" element={<PubEvents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Presentation" element={<Présentation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ClientLayout>

      <ScrollToTop />
    </div>
  );
}

export default App;
