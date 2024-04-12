import AboutUs from "./partials/AboutUs";
import AnglesNetwork from "./partials/AnglesNetwork";
import SectionBanner from "../../components/SectionBanner";
import WhyChooseUs from "../Home/partials/WhyChooseUs";

const About = () => {
  return (
    <>
      <SectionBanner
        title={"About Us"}
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <AboutUs />

      <div className="bg-gradient-to-r from-[#E1E2FF00] to-[#E9E9F9]">
        <WhyChooseUs />
      </div>

      <AnglesNetwork />
    </>
  );
};

export default About;
