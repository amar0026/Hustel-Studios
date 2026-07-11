import { useEffect } from "react";
import BusinessMeetingRoomHire from "../Components/Businessmeetingroomhire";
import SpaceHireOptionsAndPricing from "../Components/Spaceandpricing";
import SpaceHireDetails from "../Components/Spacehiredetails";


const BusinessMeetingRoomSpace = () => {
  useEffect(() => {
    document.title = "Business & Meeting Room Hire | Hustle Studios";
  }, []);

  return (
    <>
      <BusinessMeetingRoomHire />
      <SpaceHireOptionsAndPricing />
      <SpaceHireDetails/>
    </>
  );
};

export default BusinessMeetingRoomSpace;