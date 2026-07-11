import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = lazy(() => import("./Pages/Home"));
const ContactPage = lazy(() => import("./Pages/Contactpage"));
const ClassesWithGlasses = lazy(() => import("./Pages/Classeswithglasspage"));
const BusinessMeetingRoomSpace = lazy(() => import("./Pages/Business&MeetingRoomspace"));
const WorkshopAndClasses = lazy(() => import("./Pages/WorkshopAndClasses"));
const Hens = lazy(() => import("./Pages/Hens"));
const FunctionsAndEvents = lazy(() => import("./Pages/FunctionsAndEvents"));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Make lenis globally accessible for other hooks
    (window as any).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      (window as any).lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={
        <div className="flex h-[60vh] w-full items-center justify-center bg-white">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-100 border-t-[#F5A25D]"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Classes-with-Glasses" element={<ClassesWithGlasses />} />
          <Route path="Contact-Us" element={<ContactPage />} />

          {/* Space Hire dropdown pages */}
          <Route path="Business-Meeting-Room" element={<BusinessMeetingRoomSpace />} />
          <Route path="Workshop-and-Classes" element={<WorkshopAndClasses />} />
          <Route path="Functions-and-Events" element={<FunctionsAndEvents />} />
          <Route path="Hens" element={<Hens />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}