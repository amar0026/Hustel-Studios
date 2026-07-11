import { useEffect } from "react";
import Contactsection from "../Components/Contactsection";
import Herosection from "../Components/Herosection";
import Meetingroominfo from "../Components/Meetingroominfo";
import VenueGallery from "../Components/Venuegallery";

const Home = () => {
  useEffect(() => {
    document.title = "Hustle Studios | Creative Workshop & Meeting Room Space Surry Hills";
  }, []);

  return (
    <>
     <Herosection/>
     <Meetingroominfo/>
     <VenueGallery/>
     <Contactsection/>
    </>
  );
};

export default Home;