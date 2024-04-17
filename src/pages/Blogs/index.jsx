import SectionBanner from "../../components/SectionBanner";
import BlogList from "./partials/BlogList";

const Blogs = () => {
  return (
    <>
      <SectionBanner
        title={"Blogs"}
        bgImg={"../../../../images/blogs/banner.jpg"}
      />

      <BlogList />
    </>
  );
};

export default Blogs;
