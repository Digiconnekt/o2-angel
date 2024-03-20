import { motion } from "framer-motion";
import SectionBanner from "../../components/SectionBanner";
import Heading from "../../components/Typography/Heading";
import SubHeading from "../../components/Typography/SubHeading";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../utils/framerMotionHelper";

const benefitsData = [
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Benefit 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut labore et",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Benefit 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut labore et",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Benefit 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut labore et",
  },
];

const Buildnetic = () => {
  return (
    <>
      <SectionBanner
        title={"Buildnetic"}
        subTitle={
          "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
        }
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Benefits Of Investment"}
            extraClasses={"text-center text-[#131333]"}
          />
          <SubHeading
            heading={
              "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
            }
            extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {benefitsData.map((benefit, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <figure>
                <img src={benefit.icon} alt="icon" className="mx-auto" />
                <h3 className="text-lg font-semibold text-center">
                  {benefit.title}
                </h3>
                <p className="text-center mt-1">{benefit.content}</p>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#262E38]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-12 gap-y-10 md:gap-10 items-center">
            <motion.div
              className="col-span-12 md:col-span-6"
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
            >
              <figure>
                <img src="../../../../images/blogs/blog.png" alt="image" />
              </figure>
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-6"
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-4xl font-semibold text-white mb-5">
                About <span className="text-[#C854C8]">Digiconnekt</span>
              </h3>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum dicta, architecto consequatur rem ad in delectus, eaque
                asperiores earum quaerat non. Nemo fugiat delectus labore
                explicabo eligendi incidunt saepe voluptate error ut blanditiis
                facilis deleniti fuga, sequi cum inventore at non architecto
                possimus, enim perspiciatis maiores quos? Aperiam, nulla
                recusandae.
              </p>
              <p className="text-white mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dolores assumenda ea, at sint itaque dignissimos
                quisquam, nisi dolorum voluptas enim perferendis ipsam?
                Excepturi, repudiandae doloribus ut et eos aut.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Benefits Of Investment"}
            extraClasses={"text-center text-[#131333]"}
          />
          <SubHeading
            heading={
              "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
            }
            extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10 items-center">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 border rounded-xl"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../images/blogs/blog.png"
                alt="image"
                className="rounded-t-xl"
              />
            </figure>
            <div className="p-5">
              <h3 className="text-primary text-xl font-semibold mb-2">
                Strategy & Business
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, quam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Assumenda, quam.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 border rounded-xl"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../images/blogs/blog.png"
                alt="image"
                className="rounded-t-xl"
              />
            </figure>
            <div className="p-5">
              <h3 className="text-primary text-xl font-semibold mb-2">
                Strategy & Business
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, quam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Assumenda, quam.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 border rounded-xl"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../images/blogs/blog.png"
                alt="image"
                className="rounded-t-xl"
              />
            </figure>
            <div className="p-5">
              <h3 className="text-primary text-xl font-semibold mb-2">
                Strategy & Business
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, quam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Assumenda, quam.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Buildnetic;
