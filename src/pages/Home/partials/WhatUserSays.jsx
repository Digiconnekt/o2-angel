import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";

const whatUserSaysData = [
  {
    profileImg: "../../../../images/home/about-men.png",
    name: "John Doe",
    designation: "CEO at XYZ",
    message:
      "Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back",
  },
  {
    profileImg: "../../../../images/home/about-men.png",
    name: "John Doe",
    designation: "CEO at XYZ",
    message:
      "Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back",
  },
  {
    profileImg: "../../../../images/home/about-men.png",
    name: "John Doe",
    designation: "CEO at XYZ",
    message:
      "Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back",
  },
  {
    profileImg: "../../../../images/home/about-men.png",
    name: "John Doe",
    designation: "CEO at XYZ",
    message:
      "Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back",
  },
  {
    profileImg: "../../../../images/home/about-men.png",
    name: "John Doe",
    designation: "CEO at XYZ",
    message:
      "Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back",
  },
];

const WhatUserSays = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C854C8] to-[#4675CA] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            heading={"What User Says"}
            extraClasses={"text-center text-white"}
          />
          <SubHeading
            heading={
              "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
            }
            extraClasses={"text-center text-gray-200 mt-3 max-w-3xl mx-auto"}
          />

          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper mt-10"
          >
            {whatUserSaysData.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-8 border rounded-xl">
                  <div className="flex gap-1 text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-3 text-gray-400">{data.message}</p>
                  <div className="flex gap-4 mt-3">
                    <figure className="w-14 h-14">
                      <img
                        src={data.profileImg}
                        alt="user"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </figure>
                    <div>
                      <h3 className="font-semibold">{data.name}</h3>
                      <p className="text-[12px]">{data.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WhatUserSays;
