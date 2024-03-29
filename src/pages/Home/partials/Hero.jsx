import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../../utils/framerMotionHelper";

const bottomBlocksContent = [
  {
    img: "../../../../images/home/hero-icon-1.png",
    heading: "Become part of our Network",
  },
  {
    img: "../../../../images/home/hero-icon-2.png",
    heading: "Showcase your business to our Investors",
  },
];

const Hero = () => {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <video className="w-full h-[90vh] object-cover" autoPlay loop muted>
          <source src="../../../../images/home/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6">
            <motion.h1
              className="text-5xl lg:text-6xl text-white font-bold text-center"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              Welcome to the Startup World !
            </motion.h1>
            <motion.p
              className="mt-5 max-w-3xl mx-auto text-gray-200 text-2xl text-center"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              We use the latest technologies and tools in order to create a
              better code that not only works great, but it is easy easy to work
              with too.
            </motion.p>

            <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-16">
              {bottomBlocksContent.map((block, i) => (
                <motion.div
                  key={i}
                  className="col-span-12 md:col-span-6 bg-white rounded-md p-5 shadow-lg"
                  variants={i === 0 ? fadeInLeft() : fadeInRight()}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="flex gap-3 items-center">
                    <img src={block.img} alt="icon" className="w-14" />
                    <p className="text-black text-xl">{block.heading}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
