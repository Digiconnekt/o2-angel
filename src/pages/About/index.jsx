import AboutUs from "./partials/AboutUs";
import OurTeam from "./partials/OurTeam";
import OneLiner from "./partials/OneLiner";
import AnglesNetwork from "./partials/AnglesNetwork";
import SectionBanner from "../../components/SectionBanner";
import WhyChooseUs from "../Home/partials/WhyChooseUs";

const About = () => {
  return (
    <>
      <SectionBanner
        title={"About Us"}
        subTitle={
          "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
        }
        bgImg={"../../../../images/about/section-banner.jpg"}
      />
      <AboutUs />
      <OurTeam />
      <AnglesNetwork />
      <OneLiner />
      <WhyChooseUs />
    </>
  );
};

export default About;
