import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../../utils/framerMotionHelper";
import BecomePartOfNetwork from "../../../components/Modals/BecomePartOfNetwork";
import { useState } from "react";
import ShowcaseYourBusiness from "../../../components/Modals/ShowcaseYourBusiness";

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
  const [becomePartOfNetworkShowModal, setBecomePartOfNetworkShowModal] =
    useState(false);
  const [showcaseBusinessShowModal, setShowcaseBusinessShowModal] =
    useState(false);

  const modalHandler = (id) => {
    if (id === 0) {
      setBecomePartOfNetworkShowModal(true);
    } else if (id === 1) {
      setShowcaseBusinessShowModal(true);
    }
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <video
          className="w-full h-[800px] md:h-[90vh] object-cover"
          autoPlay
          loop
          muted
        >
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
              Welcome to the Startup World <br /> Empowering the Visionaries
            </motion.h1>

            <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-16">
              {bottomBlocksContent.map((block, i) => (
                <motion.div
                  key={i}
                  className="col-span-12 md:col-span-6 bg-white rounded-md p-5 shadow-lg group cursor-pointer hover:bg-[#c9dcff]"
                  variants={i === 0 ? fadeInLeft() : fadeInRight()}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => modalHandler(i)}
                >
                  <div className="flex gap-3 items-center">
                    <img src={block.img} alt="icon" className="w-14" />
                    <p className="text-black text-xl group-hover:underline transition-all duration-300">
                      {block.heading}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <BecomePartOfNetwork
              isOpen={becomePartOfNetworkShowModal}
              setIsOpen={setBecomePartOfNetworkShowModal}
            />
            <ShowcaseYourBusiness
              isOpen={showcaseBusinessShowModal}
              setIsOpen={setShowcaseBusinessShowModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
