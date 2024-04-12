import SectionBanner from "../../components/SectionBanner";
import Faqs from "./partials/Faqs";
import GetInTouch from "./partials/GetInTouch";
import Map from "./partials/Map";

const Contact = () => {
  return (
    <>
      <SectionBanner
        title={"Contact Us"}
        subTitle={
          "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
        }
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <GetInTouch />

      <Map />

      {/* <Faqs /> */}
    </>
  );
};

export default Contact;
