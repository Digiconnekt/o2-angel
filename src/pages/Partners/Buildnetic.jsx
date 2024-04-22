/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import SectionBanner from "../../components/SectionBanner";
import Heading from "../../components/Typography/Heading";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../utils/framerMotionHelper";
import Counter from "../../components/Counter/Counter";
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
      "We leverage secure & scalable solutions with the integration of technologies to develop solutions to translate your visionary ideas into reality.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    content:
      "We aim to deliver marketing-led business solutions that define bold ambitions.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    content:
      "We are hell-bent on creating the best digital world by creating better knowledge on insights, market intelligence, and data analysis.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    content:
      "Our experts help organizations nurture strong and deliver effective and outstanding customer experiences.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    content:
      "We help you build business efficiency, optimize digital processes and accelerate growth in all spheres.",
  },
];

const counterData = [
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Years In Business",
    number: 10,
  },
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Dedicated Developers",
    number: 100,
  },
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Global Clients",
    number: 500,
  },
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Outcomes Achieved",
    number: 3000,
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
    icon: "web-dev.png",
    title: "Web Development",
  },
  {
    icon: "mob-dev.png",
    title: "Mobility Solutions",
  },
  {
    icon: "cloud-computing.png",
    title: "Cloud Computing",
  },
  {
    icon: "e-learning.png",
    title: "E-Learning Solutions",
  },
  {
    icon: "cyber-security.png",
    title: "Cyber Security",
  },
  {
    icon: "business-inteligence.png",
    title: "Business Intelligence Consulting",
  },
  {
    icon: "e-commerce.png",
    title: "E-commerce Solutions",
  },
  {
    icon: "ui-ux.png",
    title: "UI-UX Solutions",
  },
  {
    icon: "custom-application.png",
    title: "Custom Application Development",
  },
  {
    icon: "software-test.png",
    title: "Software Test Management",
  },
  {
    icon: "devops.png",
    title: "DevOps Solutions & Services",
  },
  {
    icon: "product-re-engg.png",
    title: "Product Re-Engineering",
  },
  {
    icon: "dedicated-developer.png",
    title: "Dedicated Developers",
  },
  {
    icon: "data-analytics.png",
    title: "Data Analytics",
  },
  {
    icon: "testing.png",
    title: "Testing",
  },
];

const Buildnetic = () => {
  return (
    <>
      <SectionBanner
        title={"Buildnetic"}
        subTitle={"IT Outsourcing and Support Services For Your Business"}
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
                src="../../../../images/partners/buildnetic/buildnetic-logo.png"
                alt="Buildnetic"
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
              About <span className="text-[#C854C8]">Buildnetic</span>
            </h3>
            <p className="text-gray-500">
              Buildnetic serves as a powerful tool for your digitalization,
              changing your visualization into genuine business innovation and
              increasing the rate at which customers convert into paying
              customers. We are prepared to assist you with our expertise!
            </p>
            <p className="text-gray-500 mt-3">
              Our expertise combines brand creation, analytics, and consulting
              expertise to help you effectively identify client needs and create
              reliable systems and user-friendly solutions. We provide a full
              range of services, including UI design, automation, web solutions,
              artificial intelligence, machine learning, and everything in
              between.
            </p>
            <p className="text-gray-500 mt-3">
              We come together to support you as you transform your bold
              concepts into user-centered solutions. By utilizing current
              strategies and incorporating new technologies to promote digital
              excellence, we seek to broaden your brand's recognition across
              dimensions, boost client engagement, and maximize ROI.
            </p>
            <ButtonLink
              to={"https://buildnetic.com"}
              title={"Discover More"}
              extraClasses={"inline-block mt-8"}
              newTab={true}
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-[#262E38] overflow-x-hidden">
        <Counter data={counterData} numColor={"text-white"} />
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
              className="col-span-12 md:col-span-6 lg:col-span-4"
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
            <span className="text-[#FEC713]">IT Outsourcing</span> and{" "}
            <span className="text-[#FEC713]">Support Services</span> For Your
            Business
          </h2>
          <ButtonLink
            to={"https://buildnetic.com"}
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
                  src={`../../../../images/partners/buildnetic/services/${service.icon}`}
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
              to={"mailto:sales@buildnetic.com"}
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-hidden">
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

export default Buildnetic;
