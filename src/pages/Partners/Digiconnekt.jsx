/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import SectionBanner from "../../components/SectionBanner";
import Heading from "../../components/Typography/Heading";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../utils/framerMotionHelper";
import ButtonLink from "../../components/Buttons/ButtonLink";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const whyChooseUsData = [
  {
    icon: "../../../../images/home/benefits-icon.png",
    content:
      "Our proficiency brings in brand development, analytics, and consulting experience that enables you to understand client needs and design robust systems, and user-friendly solutions in an efficient way.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    content:
      "We align to be a part of your journey to translate your visionary ideas into user-centric solutions. We aim to expand your brand name across dimensions, increase client engagement, and maximize ROI by leveraging existing approaches and integrating new technologies to drive digital excellence.",
  },
];

const clientsData = [
  {
    img: "acuver.png",
  },
  {
    img: "air-tour-australia.png",
  },
  {
    img: "car-dekho.png",
  },
  {
    img: "ddf.png",
  },
  {
    img: "design-pax.png",
  },
  {
    img: "dream-webies.png",
  },
  {
    img: "ek-katha.svg",
  },
  {
    img: "epam.png",
  },
  {
    img: "healbox.png",
  },
  {
    img: "life-trail.png",
  },
  {
    img: "listed.png",
  },
  {
    img: "m-and-s.png",
  },
  {
    img: "marsh-mc-lennan.png",
  },
  {
    img: "metamore.png",
  },
  {
    img: "nostra.svg",
  },
  {
    img: "oneretailworld.png",
  },
  {
    img: "repl.png",
  },
  {
    img: "startup-buddy.png",
  },
  {
    img: "the-coding-trail.png",
  },
];

const servicesData = [
  {
    icon: "seoIcon.png",
    title: "Search Engine Optimization",
  },
  {
    icon: "smoIcon.png",
    title: "Social Media Optimization",
  },
  {
    icon: "emailMarketingIcon.png",
    title: "Email Marketing",
  },
  {
    icon: "contentMarketingIcon.png",
    title: "Content Marketing",
  },
  {
    icon: "leadGenerationIcon.png",
    title: "Lead Generation",
  },
  {
    icon: "programmaticAdIcon.png",
    title: "Programmatic Advertising",
  },
  {
    icon: "ppcIcon.png",
    title: "Pay Per Click",
  },
];

const Digiconnekt = () => {
  return (
    <>
      <SectionBanner
        title={"Digiconnekt"}
        subTitle={"Leading Digital Marketing Agency"}
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
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
            <h3 className="text-4xl font-semibold text-black mb-5">
              About <span className="text-[#C854C8]">Digiconnekt</span>
            </h3>
            <p className="text-gray-500">
              DigiConnekt is an experienced digital marketing company with
              headquarters in Singapore. Our primary focus is to provide highly
              efficient designs and functional user interfaces, integrating the
              latest technologies and frameworks to deliver innovation and
              end-user delight.
            </p>
            <p className="text-gray-500 mt-3">
              We boost your digital space with the latest technology by deeply
              analyzing the latest tool and technology, the demand of the
              market, and generating results accordingly.
            </p>

            <ButtonLink
              to={"https://digiconnekt.com"}
              title={"Discover More"}
              extraClasses={"inline-block mt-8"}
              newTab={true}
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-hidden">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Why Choose Us"}
            extraClasses={"text-center text-[#131333]"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {whyChooseUsData.map((whyUs, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-6"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <figure>
                <img src={whyUs.icon} alt="icon" className="mx-auto" />
                <p className="text-center mt-1">{whyUs.content}</p>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#C854C8] to-[#4675CA] py-14">
        <div className="mx-auto text-center max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center leading-[40px] md:leading-[70px]">
            <span className="text-[#FEC713]">Digiconnekt</span>, A String Of{" "}
            <span className="text-[#FEC713]">Solutions</span>
          </h2>
          <ButtonLink
            to={"https://digiconnekt.com"}
            title={"Discover More"}
            extraClasses={"inline-block mt-5"}
            newTab={true}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-hidden">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Services"}
            extraClasses={"text-center text-[#131333]"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {servicesData.map((service, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-5 border p-5 rounded-xl"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <figure className="w-14 h-14">
                <img
                  src={`../../../../images/partners/digiconnekt/services/${service.icon}`}
                  alt="icon"
                  className=""
                />
              </figure>
              <p className="text-xl font-semibold flex-1">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#262E38] overflow-x-hidden py-14">
        <div className="mx-auto text-center max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center leading-[40px] md:leading-[70px]">
            Get In Touch
          </h2>
          <div className="mt-5">
            <NavLink
              to={"tel:+919953306911"}
              className={
                "block sm:inline-block bg-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold"
              }
            >
              <IoCallOutline className="inline-block me-2" />
              Call Us
            </NavLink>

            <NavLink
              to={"mailto:info@digiconnekt.com"}
              className={
                "block sm:inline-block bg-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold sm:ms-5 mt-3 sm:mt-0"
              }
            >
              <CiMail className="inline-block me-2" />
              Mail Us
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Our Clients"}
            extraClasses={"text-center text-[#131333]"}
          />

          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              990: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper mt-10"
          >
            {clientsData.map((client, i) => (
              <SwiperSlide key={i}>
                <figure>
                  <img
                    src={`../../../../images/partners/clients/${client.img}`}
                    alt="logo"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default Digiconnekt;
