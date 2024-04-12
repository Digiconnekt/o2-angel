import SectionBanner from "../../components/SectionBanner";
import PortfolioList from "./partials/PortfolioList";

const index = () => {
  return (
    <>
      <SectionBanner
        title={"Portfolio"}
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <PortfolioList />
    </>
  );
};

export default index;
