import { useEffect } from "react";
import FunctionEventSection from "../Components/FunctionEventSection";
import SpaceHireOptionsAndPricing from "../Components/Spaceandpricing";
import SpaceHireDetails from "../Components/Spacehiredetails";



const FunctionsAndEvents = () => {
  useEffect(() => {
    document.title = "Function & Event Venue Hire | Hustle Studios";
  }, []);

  return (
    <>
      <FunctionEventSection/>
      <SpaceHireOptionsAndPricing />
      <SpaceHireDetails/>
    </>
  );
};

export default FunctionsAndEvents;