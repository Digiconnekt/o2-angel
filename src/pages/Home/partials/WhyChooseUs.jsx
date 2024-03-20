import "swiper/css";
import { motion } from "framer-motion";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";
import { fadeInBottom } from "../../../utils/framerMotionHelper";

const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-gray-100 py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading
              heading={"Why Choose Us"}
              extraClasses={"text-center text-[#131333]"}
            />
            <SubHeading
              heading={
                "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
              }
              extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
            />
          </motion.div>

          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper mt-10"
          >
            <SwiperSlide className="bg-white rounded-xl border shadow-sm px-10 py-5">
              <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
                <div className="col-span-12 md:col-span-6">
                  <figure>
                    <img
                      src="../../../../images/home/why-choose-us.png"
                      alt="About"
                      className="w-full"
                    />
                  </figure>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="text-2xl font-semibold">Profit</h3>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum voluptatem minima rerum quos unde rem voluptatibus
                    autem modi explicabo reiciendis amet dicta repellendus fugit
                    minus optio sequi facere in odit eligendi accusamus
                    asperiores tenetur, voluptas et quibusdam! Sint, vitae
                    natus! autem modi explicabo reiciendis amet dicta
                    repellendus fugit minus optio sequi facere in odit eligendi
                    accusamus asperiores tenetur, voluptas et quibusdam! Sint,
                    vitae natus!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl border shadow-sm px-10 py-5">
              <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
                <div className="col-span-12 md:col-span-6">
                  <figure>
                    <img
                      src="../../../../images/home/why-choose-us.png"
                      alt="About"
                      className="w-full"
                    />
                  </figure>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="text-2xl font-semibold">Profit</h3>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum voluptatem minima rerum quos unde rem voluptatibus
                    autem modi explicabo reiciendis amet dicta repellendus fugit
                    minus optio sequi facere in odit eligendi accusamus
                    asperiores tenetur, voluptas et quibusdam! Sint, vitae
                    natus! autem modi explicabo reiciendis amet dicta
                    repellendus fugit minus optio sequi facere in odit eligendi
                    accusamus asperiores tenetur, voluptas et quibusdam! Sint,
                    vitae natus!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
