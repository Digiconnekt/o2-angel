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
              "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
            }
            extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto text-center"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-16">
          <motion.div
            className="col-span-12 md:col-span-6 rounded-xl p-10 group"
            style={{
              backgroundImage: "url('../../../../images/blogs/blog.png')",
            }}
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="mt-32 bg-white p-10 rounded-xl">
              <figure className="mb-5">
                <img src="../../../../images/home/hero-icon-1.png" alt="icon" />
              </figure>
              <h3 className=" text-primary text-xl font-semibold">
                Digital Marketing Partner- DigiConnekt
              </h3>
              <div className="">
                <p className=" text-gray-500 mt-3 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quasi repellat. Nulla ipsum laudantium impedit non iure
                  suscipit porro tempore?
                </p>
                <ButtonLink
                  to={"/partners/digiconnekt"}
                  title={"Learn More"}
                  extraClasses={"inline-block"}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 rounded-xl p-10 group"
            style={{
              backgroundImage: "url('../../../../images/blogs/blog.png')",
            }}
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="mt-32 bg-white p-10 rounded-xl">
              <figure className="mb-5">
                <img src="../../../../images/home/hero-icon-1.png" alt="icon" />
              </figure>
              <h3 className=" text-primary text-xl font-semibold">
                Technology Partner- Buildnetic
              </h3>
              <div className="">
                <p className=" text-gray-500 mt-3 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quasi repellat. Nulla ipsum laudantium impedit non iure
                  suscipit porro tempore?
                </p>
                <ButtonLink
                  to={"/partners/buildnetic"}
                  title={"Learn More"}
                  extraClasses={"inline-block"}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PartnerList;
