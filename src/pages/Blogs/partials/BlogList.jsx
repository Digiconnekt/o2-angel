import { motion } from "framer-motion";
import Card from "../../../components/Blogs/Card";
import blogData from "../../../utils/blogData";
import RecentBlogCard from "./RecentBlogCard";
import { fadeInBottom, fadeInRight } from "../../../utils/framerMotionHelper";

const BlogList = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid grid-cols-12 items-start gap-y-10 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-12 gap-y-10 md:gap-10">
              {blogData.map((blog, i) => (
                <motion.div
                  className="col-span-12 md:col-span-6"
                  key={i}
                  variants={fadeInBottom()}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Card blog={blog} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="col-span-12 lg:col-span-4 border p-5 xl:p-10 rounded-xl sticky top-32"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-2xl font-semibold text-primary">
              Recent Blogs
            </h2>
            <div className="bg-primary w-24 h-[2px] mt-3" />
            <ul className="mt-7">
              {blogData.slice(0, 3).map((blog, i) => (
                <li
                  key={i}
                  className={`${i !== blogData.length - 1 ? "mb-5" : ""}`}
                >
                  <RecentBlogCard blog={blog} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
