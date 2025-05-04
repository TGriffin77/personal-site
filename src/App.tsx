import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import "./App.css";
import ObserverProvider from "./components/ObserverProvider";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/home"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));

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
      <ObserverProvider>
        <Nav />
        <Suspense fallback={<div className="h-screen">loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<p className="h-screen text-4xl">404 Page not found.</p>}
            />
          </Routes>
        </Suspense>
        <Footer />
      </ObserverProvider>
    </>
  );
}

export default App;
