import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "../../../components/Typography/Heading";
import ButtonLink from "../../../components/Buttons/ButtonLink";

const Blogs = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between">
          <Heading
            heading={"Blogs & Articles"}
            extraClasses={"text-[#131333]"}
          />
          <ButtonLink title={"See More Blogs"} to={"#"} />
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <NavLink
            to={"/blogs/1"}
            className="col-span-12 md:col-span-6 border rounded-xl shadow-sm group hover:shadow-none duration-300"
          >
            <div className="grid grid-cols-12 items-center gap-x-5">
              <div className="col-span-6 h-full">
                <figure className="flex-1 h-full overflow-hidden">
                  <img
                    src="../../../../images/home/blog-1.png"
                    alt="blog"
                    className="rounded-l-xl w-full h-full object-cover group-hover:scale-125 duration-300"
                  />
                </figure>
              </div>
              <div className="col-span-6 py-6 pe-6">
                <h2 className="text-[#121212] text-2xl font-semibold group-hover:text-primary duration-300">
                  We Protecting Your Digital Assets
                </h2>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis fugit ipsam nihil itaque eaque, dolor eveniet harum,
                  consectetur iusto nam quae dicta? Repellendus aperiam
                  reprehenderit ....
                </p>
                <p className="flex items-center gap-2 text-[#F963BC] mt-3 group-hover:font-semibold duration-300">
                  Read More <FaArrowRightLong className="" />
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to={"/blogs/1"}
            className="col-span-12 md:col-span-6 border rounded-xl shadow-sm group hover:shadow-none duration-300"
          >
            <div className="grid grid-cols-12 items-center gap-x-5">
              <div className="col-span-6 h-full">
                <figure className="flex-1 h-full overflow-hidden">
                  <img
                    src="../../../../images/home/blog-2.png"
                    alt="blog"
                    className="rounded-l-xl w-full h-full object-cover group-hover:scale-125 duration-300"
                  />
                </figure>
              </div>
              <div className="col-span-6 py-6 pe-6">
                <h2 className="text-[#121212] text-2xl font-semibold group-hover:text-primary duration-300">
                  We Protecting Your Digital Assets
                </h2>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis fugit ipsam nihil itaque eaque, dolor eveniet harum,
                  consectetur iusto nam quae dicta? Repellendus aperiam
                  reprehenderit ....
                </p>
                <p className="flex items-center gap-2 text-[#F963BC] mt-3 group-hover:font-semibold duration-300">
                  Read More <FaArrowRightLong className="" />
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Blogs;
