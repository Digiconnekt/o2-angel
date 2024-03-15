import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../../../components/Typography/Heading";
import ButtonLink from "../../../components/Buttons/ButtonLink";
import blogData from "../../../utils/blogData";

const Blogs = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between">
          <Heading
            heading={"Blogs & Articles"}
            extraClasses={"text-[#131333]"}
          />
          <ButtonLink
            title={"See More Blogs"}
            to={"/blogs"}
            extraClasses={"hidden sm:block"}
          />
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {blogData.slice(0, 2).map((blog, i) => (
            <NavLink
              to={blog.href}
              className="col-span-12 md:col-span-6 border rounded-xl shadow-sm group hover:shadow-none duration-300"
              key={i}
            >
              <div className="grid grid-cols-12 items-center gap-x-5">
                <div className="col-span-12 sm:col-span-6 h-full">
                  <figure className="flex-1 h-64 sm:h-full overflow-hidden">
                    <img
                      src={`../../../../images/blogs/${blog.image}`}
                      alt="blog"
                      className="rounded-t-xl sm:rounded-l-xl w-full h-full object-cover group-hover:scale-125 duration-300"
                    />
                  </figure>
                </div>
                <div className="col-span-12 sm:col-span-6 py-6 pe-6 ps-6 sm:ps-0">
                  <h2 className="text-[#121212] text-2xl font-semibold group-hover:text-primary duration-300">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-gray-500">{blog.description}</p>
                  <p className="flex items-center gap-2 text-[#F963BC] mt-3 group-hover:font-semibold duration-300">
                    Read More <FaArrowRightLong className="" />
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <ButtonLink
          title={"See More Blogs"}
          to={"/blogs"}
          extraClasses={"sm:hidden mt-8 text-center"}
        />
      </div>
    </>
  );
};

export default Blogs;
