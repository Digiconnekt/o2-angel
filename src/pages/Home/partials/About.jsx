/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Heading from "../../../components/Typography/Heading";
import ButtonLink from "../../../components/Buttons/ButtonLink";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../../utils/framerMotionHelper";

const About = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"About Us"}
            extraClasses={"text-center text-[#131333]"}
          />
        </motion.div>

        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10 mt-12">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-7"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-md">
              Our team at O2 utilizes advanced technologies and innovative tools
              to craft high-quality code that operates flawlessly and
              facilitates seamless collaboration and efficient maintenance
              processes.
            </h3>

            <div className="flex mt-10 gap-5">
              <figure>
                <img src="../../../../images/home/about-men.png" alt="About" />
              </figure>
              <div>
                <h3 className="text-lg font-semibold">Rajesh Ranjan</h3>
                <p className="text-[#C854C8] text-sm mb-3">Founder</p>
                <p className="max-w-lg text-sm text-gray-500">
                  A seasoned investment banking professional with over 20 years
                  of experience in the origination, execution, and placement of
                  equity shares and structured instruments. Rajesh has
                  successfully raised over $2 billion for more than 100 SMEs
                  across reputable firms in India. He is also an accomplished
                  angel investor.
                </p>
                <p className="max-w-lg text-sm text-gray-500 mt-3">
                  Rajesh holds a Master's in Management Studies (Finance), LLB,
                  and BSc, and has completed CFA Level 1. His diverse expertise
                  and proven track record make him well-equipped to lead O2
                  Investors, delivering strategic investment solutions for
                  sustainable growth.
                </p>
              </div>
            </div>

            <ButtonLink
              to={"/about"}
              title={"Discover More"}
              extraClasses={"inline-block mt-8"}
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-5"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../images/home/about.png"
                alt="About"
                className="w-full"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
