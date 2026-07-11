import { useEffect } from "react";
import Henssection from "../Components/Henssection";
import SpaceHireOptionsAndPricing from "../Components/Spaceandpricing";
import SpaceHireDetails from "../Components/Spacehiredetails";



const Hens = () => {
  useEffect(() => {
    document.title = "Hens Parties & Bridal Showers | Hustle Studios";
  }, []);

  return (
    <>
      <Henssection/>
      <SpaceHireOptionsAndPricing />
      <SpaceHireDetails/>
    </>
  );
};

export default Hens;