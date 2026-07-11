import { useEffect } from "react";
import SpaceHireOptionsAndPricing from "../Components/Spaceandpricing";
import SpaceHireDetails from "../Components/Spacehiredetails";
import Workshopsection from "../Components/Workshopsection";


const WorkshopAndClasses = () => {
  useEffect(() => {
    document.title = "Workshop & Class Space Hire | Hustle Studios";
  }, []);

  return (
    <>
      <Workshopsection/>
      <SpaceHireOptionsAndPricing />
      <SpaceHireDetails/>
    </>
  );
};

export default WorkshopAndClasses;