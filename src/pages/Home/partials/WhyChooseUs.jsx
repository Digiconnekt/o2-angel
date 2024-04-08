import { motion } from "framer-motion";
import Heading from "../../../components/Typography/Heading";
import { fadeInBottom } from "../../../utils/framerMotionHelper";
import SubHeading from "../../../components/Typography/SubHeading";

const whyChooseUsData = [
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Unparalleled Expertise",
    content:
      "Our team comprises seasoned professionals with extensive experience across diverse sectors, ensuring expert guidance and strategic insights to drive your investment success.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Diversified Investment Opportunities",
    content:
      "We offer a comprehensive portfolio of investment opportunities spanning multiple industries, allowing you to diversify your investments according to your preferences and risk appetite.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-2.png",
    title: "Dedicated Support and Transparency",
    content:
      "From conducting thorough due diligence to providing post-investment management, we offer hands-on support and maintain transparency throughout the investment process, ensuring a seamless experience.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-2.png",
    title: "Proven Track Record",
    content:
      "With a remarkable track record of successful investments and satisfied clients, you can entrust us with your financial goals, leveraging our expertise to achieve sustainable growth.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-3.png",
    title: "Innovative Approach",
    content:
      "We stay ahead of the curve by embracing the latest technologies and methodologies in investment analysis and management, positioning your investments for success in today's dynamic market landscape.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-3.png",
    title: "Unwavering Commitment to Excellence",
    content:
      "At O2 Investors, excellence is at the core of everything we do. We strive to exceed your expectations and deliver outstanding results, consistently raising the bar with our commitment to your success.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
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
              "Unmatched Proficiency, Boundless Possibilities: Guiding You to Investment Triumphs"
            }
            extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {whyChooseUsData.map((data, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-6 bg-white shadow-sm border p-7 rounded-2xl"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <div className="flex gap-2 flex-col lg:flex-row">
                <figure className="me-2">
                  <img
                    src="../../../../../images/about/our-team-icon-1.png"
                    alt="icon"
                    className="lg:w-24"
                  />
                </figure>
                <div>
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                  <p className="mt-1 text-gray-500">{data.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
