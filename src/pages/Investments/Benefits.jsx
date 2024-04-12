import { motion } from "framer-motion";
import SectionBanner from "../../components/SectionBanner";
import Heading from "../../components/Typography/Heading";
import SubHeading from "../../components/Typography/SubHeading";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../utils/framerMotionHelper";

const ourTeamData = [
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Seasoned Investment Banking Expertise",
    content:
      "Our team is backed by a large number of seasoned investment bankers, bringing a wealth of knowledge and experience to the table.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Three Decades of Fundraising and SME Support",
    content:
      "With a combined experience of over three decades, our team has a proven track record in successfully raising funds and supporting small and medium-sized enterprises (SMEs) in their growth journey.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "End-to-End Investment Lifecycle Management",
    content:
      "Our expertise spans the entire investment lifecycle, from proactive deal sourcing and due diligence to facilitating exits, ensuring a comprehensive and well-rounded approach.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Strong Due Diligence and Compliance Prowess",
    content:
      "Our team boasts a strong background in conducting thorough due diligence and ensuring compliance with regulatory requirements, safeguarding the interests of our investors and portfolio companies.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Diverse Fundraising Experience",
    content:
      "We have extensive experience in raising funds from various sources, including private markets (private equity, venture capital, and qualified institutional buyers), public markets (initial public offerings and rights issues), and financial institutions, leveraging our deep understanding of corporate finance.",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Proven Track Record in Startup Investments",
    content:
      "The core members of our team have a demonstrated history of successfully investing in over 25 startups and high-growth global companies, bringing valuable insights and a proven investment strategy to the table.",
  },
];

const Benefits = () => {
  return (
    <>
      <SectionBanner
        title={"Benefits Of Investments"}
        subTitle={"Maximizing Returns, Minimizing Risks"}
        bgImg={"../../../../images/about/section-banner.jpg"}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading heading={"Benefits"} extraClasses={"text-[#131333]"} />
            <SubHeading
              heading={
                "At O2 Angels, our structured investment process delivers a range of benefits, ensuring a rewarding experience for our angels. Through rigorous due diligence, collaborative decision-making, and regulatory compliance, we empower informed choices while mitigating risks. Our dedicated support and performance updates foster transparency. By employing our expertise and network, we unlock new growth opportunities, paving the way for success. Invest with confidence and unlock the full potential of angel investing with us."
              }
              extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto"}
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../../images/about/about.png"
                alt="about"
                className="w-full"
              />
            </figure>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#E1E2FF00] to-[#E9E9F9] py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <span className="block text-center uppercase text-[#4C6FFF] font-semibold">
              Our Team
            </span>
            <Heading
              heading={"Meet Our Awesome and Professional Team"}
              extraClasses={"text-[#131333] text-center"}
            />
          </motion.div>

          <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
            {ourTeamData.map((data, i) => (
              <motion.div
                key={i}
                className="col-span-12 md:col-span-6 bg-white shadow-sm border p-7 rounded-2xl"
                variants={fadeInBottom()}
                initial="hidden"
                whileInView="visible"
              >
                <div className="grid grid-cols-12 gap-2 lg:gap-x-0">
                  <figure className="col-span-12 sm:col-span-2">
                    <img
                      src="../../../../../images/about/our-team-icon-1.png"
                      alt="icon"
                      className="w-14 h-14 object-contain"
                    />
                  </figure>
                  <div className="col-span-12 sm:col-span-10">
                    <h3 className="text-lg font-semibold">{data.title}</h3>
                    <p className="mt-1 text-gray-500">{data.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <figure>
              <img
                src="../../../../../images/about/about.png"
                alt="about"
                className="w-full"
              />
            </figure>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <Heading heading={"Benefits"} extraClasses={"text-[#131333]"} />
            <SubHeading
              heading={
                "At O2 Angels, the benefits of investing with us are amplified by our seasoned team's expertise. Backed by investment bankers and three decades of fundraising experience, we conduct thorough investigations and ensure compliance adherence. Our end-to-end lifecycle management, from deal sourcing to exits, is driven by a team with a proven track record of investing in over 25 startups. Leverage our diverse fundraising proficiency, spanning private equity to public markets, and deep corporate finance knowledge for a rewarding investment journey."
              }
              extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto"}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
