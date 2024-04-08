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
                "Our team at O2 utilizes advanced technologies and innovative tools to craft high-quality code that operates flawlessly and facilitates seamless collaboration and efficient maintenance processes."
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
