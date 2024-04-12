/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButtonLink from "../../../components/Buttons/ButtonLink";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../../utils/framerMotionHelper";

const PartnerList = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Partner Services"}
            extraClasses={"text-[#131333] text-center"}
          />
          <SubHeading
            heading={
              "Innovative Technologies, Fostering Collaborative Code Excellence."
            }
            extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto text-center"}
          />
        </motion.div>

        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10 mt-20">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <figure className="max-w-52 h-52 mx-auto">
              <img
                src="../../../../images/partners/digiconnekt/digiconnekt-logo.png"
                alt="Digiconnekt"
                className="w-full h-full object-contain"
              />
            </figure>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-8"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-3xl font-semibold text-black mb-5">
              Digital Marketing Partner -{" "}
              <span className="text-[#C854C8]">Digiconnekt</span>
            </h3>
            <p className="text-gray-500">
              DigiConnekt is a Singapore-based digital marketing agency.
              Blending cutting-edge designs with seamless user interfaces, they
              integrate the latest technologies to deliver the best digital
              solutions that delight end-users. Their experts analyze trends and
              harness new tools to boost your online presence and maximize
              impact.
            </p>

            <ButtonLink
              to={"https://digiconnekt.com"}
              title={"Discover More"}
              extraClasses={"inline-block mt-8"}
              newTab={true}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10 mt-20">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-8"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-3xl font-semibold text-black mb-5">
              Technology Partner-{" "}
              <span className="text-[#C854C8]">Buildnetic</span>
            </h3>
            <p className="text-gray-500">
              Buildnetic transforms visions into digital excellence. Experts in
              branding, analytics, and consulting, they deliver user-centric
              solutions and reliable systems. Their comprehensive services boost
              customer engagement through cutting-edge strategies and
              technologies. Maximize ROI and unlock innovation with Buildnetic's
              digital prowess.
            </p>

            <ButtonLink
              to={"https://buildnetic.com"}
              title={"Discover More"}
              extraClasses={"inline-block mt-8"}
              newTab={true}
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <figure className="max-w-52 h-52 mx-auto">
              <img
                src="../../../../images/partners/buildnetic/buildnetic-logo.png"
                alt="buildnetic"
                className="w-full h-full object-contain"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PartnerList;
