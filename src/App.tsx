import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ContactPage from "./Pages/Contactpage";
import ClassesWithGlasses from "./Pages/Classeswithglasspage";
import BusinessMeetingRoomSpace from "./Pages/Business&MeetingRoomspace";
import WorkshopAndClasses from "./Pages/WorkshopAndClasses";
import Hens from "./Pages/Hens";
import FunctionsAndEvents from "./Pages/FunctionsAndEvents";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
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
      <Footer />
    </BrowserRouter>
  );
}