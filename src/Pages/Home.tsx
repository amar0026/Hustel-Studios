import Contactsection from "../Components/Contactsection";
import Herosection from "../Components/Herosection";
import Meetingroominfo from "../Components/Meetingroominfo";
import VenueGallery from "../Components/Venuegallery";

const Home = () => {
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