import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import "./App.css";
import ObserverProvider from "./components/ObserverProvider";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ModalRoute from "./components/Modal";

const Home = lazy(() => import("./pages/home"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));

// #00CEB3 color for secondary components

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const backgroundLocation = state?.background;

  const openModal = (slug: string) => {
    navigate(`/portfolio/${slug}`, { state: { background: location } });
  };

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
        <button onClick={() => openModal("test")}>about click</button>
        <Suspense fallback={<div className="h-screen">loading...</div>}>
          <Routes location={backgroundLocation || location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<p className="h-screen text-4xl">404 Page not found.</p>}
            />
          </Routes>
          {backgroundLocation && (
            <Routes>
              <Route path="/portfolio/:slug" element={<ModalRoute />} />
            </Routes>
          )}
        </Suspense>
        <Footer />
      </ObserverProvider>
    </>
  );
}

export default App;
