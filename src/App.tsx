import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Blog from "./pages/blog";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

// #00CEB3 color for secondary components

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
