import SectionBanner from "../../components/SectionBanner";
import Faqs from "./partials/Faqs";
import GetInTouch from "./partials/GetInTouch";
import Map from "./partials/Map";

const Contact = () => {
  return (
    <>
      <SectionBanner
        title={"Contact Us"}
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <GetInTouch />

      <Map />

      {/* <Faqs /> */}
    </>
  );
};

export default Contact;
