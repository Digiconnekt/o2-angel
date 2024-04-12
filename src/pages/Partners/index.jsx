import SectionBanner from "../../components/SectionBanner";
import PartnerList from "./partials/PartnerList";

const index = () => {
  return (
    <>
      <SectionBanner
        title={"Partners"}
        subTitle={"Collaborating with Industry Leaders for Enhanced Success"}
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <PartnerList />
    </>
  );
};

export default index;
