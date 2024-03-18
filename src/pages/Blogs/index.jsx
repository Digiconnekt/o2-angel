import SectionBanner from "../../components/SectionBanner";
import BlogList from "./partials/BlogList";

const Blogs = () => {
  return (
    <>
      <SectionBanner
        title={"Blogs"}
        subTitle={
          "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
        }
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <BlogList />
    </>
  );
};

export default Blogs;
