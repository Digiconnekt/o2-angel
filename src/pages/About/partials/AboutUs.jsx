import { motion } from "framer-motion";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";
import { fadeInLeft, fadeInRight } from "../../../utils/framerMotionHelper";

const AboutUs = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading heading={"About Us"} extraClasses={"text-[#131333]"} />
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
    </>
  );
};

export default AboutUs;
