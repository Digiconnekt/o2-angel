import { motion } from "framer-motion";
import SectionBanner from "../../components/SectionBanner";
import Heading from "../../components/Typography/Heading";
import SubHeading from "../../components/Typography/SubHeading";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../utils/framerMotionHelper";

const ourTeamData = [
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-2.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-2.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-3.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-3.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
];

const Benefits = () => {
  return (
    <>
      <SectionBanner
        title={"Benefits Of Investments"}
        subTitle={
          "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
        }
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading heading={"Benefits"} extraClasses={"text-[#131333]"} />
            <SubHeading
              heading={
                "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too. We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too. but it is easy easy to work with too. We use the latest technologies and tools"
              }
              extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto"}
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../../images/about/about.png"
                alt="about"
                className="w-full"
              />
            </figure>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#E1E2FF00] to-[#E9E9F9] py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <span className="block text-center uppercase text-[#4C6FFF] font-semibold">
              Our Team
            </span>
            <Heading
              heading={"Meet our awesome and professional team"}
              extraClasses={"text-[#131333] text-center"}
            />
          </motion.div>

          <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
            {ourTeamData.map((data, i) => (
              <motion.div
                key={i}
                className="col-span-12 md:col-span-6 bg-white shadow-sm border p-7 rounded-2xl"
                variants={fadeInBottom()}
                initial="hidden"
                whileInView="visible"
              >
                <div className="flex gap-2 flex-col lg:flex-row">
                  <figure className="me-2">
                    <img
                      src="../../../../../images/about/our-team-icon-1.png"
                      alt="icon"
                      className="lg:w-24"
                    />
                  </figure>
                  <div>
                    <h3 className="text-lg font-semibold">{data.title}</h3>
                    <p className="mt-1 text-gray-500">{data.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../../images/about/about.png"
                alt="about"
                className="w-full"
              />
            </figure>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading heading={"Benefits"} extraClasses={"text-[#131333]"} />
            <SubHeading
              heading={
                "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too. We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too. but it is easy easy to work with too. We use the latest technologies and tools"
              }
              extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto"}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
