import SectionBanner from "../../components/SectionBanner";
import WhyChooseUs from "../Home/partials/WhyChooseUs";
import OneLiner from "./partials/OneLiner";
import PartnerList from "./partials/PartnerList";

const index = () => {
  return (
    <>
      <SectionBanner
        title={"Partners"}
        subTitle={
          "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
        }
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <PartnerList />

      <OneLiner />

      <WhyChooseUs />
    </>
  );
};

export default index;
