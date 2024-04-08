/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Heading from "../../../components/Typography/Heading";
import { fadeInLeft, fadeInRight } from "../../../utils/framerMotionHelper";

const AnglesNetwork = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 items-start gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-8"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading
              heading={"O2 Angels Network has been founded by Rajesh Ranjan"}
              extraClasses={"text-[#131333]"}
            />

            <p className="mt-5 text-gray-500">
              A seasoned investment banking professional with over 20 years of
              experience in the origination, execution, and placement of equity
              shares and structured instruments. Rajesh has successfully raised
              over $2 billion for more than 100 SMEs across reputable firms in
              India. He is also an accomplished angel investor.
            </p>
            <p className="mt-5 text-gray-500">
              Rajesh holds a Master's in Management Studies (Finance), LLB, and
              BSc, and has completed CFA Level 1. His diverse expertise and
              proven track record make him well-equipped to lead O2 Investors,
              delivering strategic investment solutions for sustainable growth.
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 border shadow-sm p-5 rounded-xl"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <figure className="">
              <img
                src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
                alt="about"
                className="h-full w-full object-cover"
              />
            </figure>
            <h3 className="mt-4 text-center text-lg font-semibold">
              Rajesh Ranjan
            </h3>
            <p className="text-sm text-center mt-1 text-gray-400">FOUNDER</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AnglesNetwork;
