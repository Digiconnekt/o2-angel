import { motion } from "framer-motion";
import Heading from "../../../components/Typography/Heading";
import { fadeInLeft, fadeInRight } from "../../../utils/framerMotionHelper";

const Investors = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-14 lg:pb-24 overflow-x-hidden">
        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading heading={"Investors"} extraClasses={"text-[#131333]"} />

            <p className="text-gray-500 mt-3 text-md">
              At O2 Angel Investors, we are committed to driving innovation by
              backing visionary startups that have the potential to disrupt
              industries and create lasting impact. Our strategic approach
              combines smart investments with invaluable mentorship and access
              to a powerful network of industry leaders and fellow investors.
            </p>
            <p className="text-gray-500 mt-3 text-md">
              We curate a diverse portfolio of high-potential opportunities
              across various sectors, allowing our investors to diversify their
              investments and capitalize on emerging trends. From cutting-edge
              technology to groundbreaking products and services, our rigorous
              due diligence process ensures that we identify startups with
              exceptional growth prospects.
            </p>
            <p className="text-gray-500 mt-3 text-md">
              By joining our vibrant community, you gain access to a wealth of
              knowledge, insights, and connections. Collaborate with like-minded
              investors, tap into the expertise of industry veterans, and engage
              with dynamic entrepreneurs who are shaping the future. Together,
              we can unlock new avenues for success, drive meaningful change,
              and achieve remarkable returns on our investments.
            </p>
            <p className="text-gray-500 mt-3 text-md">
              Invest in innovation, foster entrepreneurship, and be a catalyst
              for positive change – partner with O2 Angel Investors and be part
              of a movement that propels visionary ideas to new heights.
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../../images/home/investor.png"
                alt="investor"
                className="w-full"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Investors;
