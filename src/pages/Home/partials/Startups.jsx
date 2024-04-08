/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Heading from "../../../components/Typography/Heading";
import { fadeInLeft, fadeInRight } from "../../../utils/framerMotionHelper";

const Startups = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10 mt-10">
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
            <Heading heading={"Startups"} extraClasses={"text-[#131333]"} />
            <p className="text-gray-500 mt-3 text-md">
              Launching a startup is an exhilarating journey, but securing the
              necessary capital can be a daunting challenge. At O2 Angel
              Investors, we understand the obstacles entrepreneurs face in
              bringing their visionary ideas to fruition. Our mission is to
              empower innovative founders like you by providing the resources
              and support needed to transform your dreams into thriving
              enterprises.
            </p>
            <p className="text-gray-500 mt-3 text-md">
              Our platform connects ambitious startups with a network of
              seasoned investors who share your passion for groundbreaking
              concepts. Whether you're in the early stages of development or
              poised for rapid growth, we facilitate a streamlined funding
              process tailored to your startup's unique requirements.
            </p>
            <p className="text-gray-500 mt-3 text-md">
              Join the O2 Angel Investors community and take the first step
              towards realizing your entrepreneurial ambitions. Let us be your
              partners in turning your vision into a reality, fueling your
              startup's success through strategic investments and invaluable
              mentorship.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Startups;
