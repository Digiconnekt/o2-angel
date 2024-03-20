import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";
import Heading from "../../../components/Typography/Heading";
import { fadeInBottom } from "../../../utils/framerMotionHelper";

const faqData = [
  {
    que: "What is your refund policy?",
    ans: "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    que: "What is your refund policy?",
    ans: "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    que: "What is your refund policy?",
    ans: "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
];

export default function Faqs() {
  return (
    <div className="py-14 lg:py-24 bg-gradient-to-bl from-[#E9E9F9] to-[#E1E2FF00]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Have Some Questions ?"}
            extraClasses={"text-[#131333] text-center mb-10"}
          />

          {faqData.map((faq, i) => (
            <Disclosure as={"div"} className={"my-3"} key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between bg-white px-6 py-5 text-left text-md font-medium text-primary hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-secondary ${
                      open ? "rounded-t-lg" : "rounded-lg"
                    }`}
                  >
                    <span>{faq.que}</span>
                    <FaChevronUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`px-6 py-5 pt-0 text-md text-gray-500 bg-white ${
                      open ? "rounded-b-lg" : "rounded-lg"
                    }`}
                  >
                    <div className="w-full h-[1px] bg-gray-200 mb-4" />
                    {faq.ans}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
