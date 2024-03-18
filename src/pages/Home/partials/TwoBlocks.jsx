import { motion } from "framer-motion";
import { fadeInBottom } from "../../../utils/framerMotionHelper";

const TwoBlocks = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 pb-36">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6 relative"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../images/home/startup.png"
                alt="startup"
                className="w-full"
              />
            </figure>
            <div className="absolute -bottom-[50px] left-10 right-10 bg-white p-5 shadow-sm border rounded-xl">
              <h2 className="text-center text-3xl font-bold">Startups</h2>
              <p className="text-center text-gray-500 mt-3 max-w-sm mx-auto">
                Raise Funds for your Startup Raise Funds for your Startup Raise
                Funds for your Startup Raise Funds for your StartupRaise Funds
                for your.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 relative mt-20 md:mt-0"
            variants={fadeInBottom(1.4)}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../images/home/startup.png"
                alt="startup"
                className="w-full"
              />
            </figure>
            <div className="absolute -bottom-[50px] left-10 right-10 bg-white p-5 shadow-sm border rounded-xl">
              <h2 className="text-center text-3xl font-bold">Startups</h2>
              <p className="text-center text-gray-500 mt-3 max-w-sm mx-auto">
                Raise Funds for your Startup Raise Funds for your Startup Raise
                Funds for your Startup Raise Funds for your StartupRaise Funds
                for your.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TwoBlocks;
