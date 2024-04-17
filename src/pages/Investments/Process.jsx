import { motion } from "framer-motion";
import Heading from "../../components/Typography/Heading";
import SubHeading from "../../components/Typography/SubHeading";
import { fadeInBottom, fadeInRight } from "../../utils/framerMotionHelper";
import SectionBanner from "../../components/SectionBanner";

const investmentProcessData = [
  {
    title: "Deal Sourcing",
    content:
      "Proactively searches for potential investment opportunities through various channels such as networking events, referrals, online platforms, and industry connections.",
    icon: "1.png",
  },
  {
    title: "Deal Screening",
    content:
      "Evaluate incoming opportunities based on predetermined criteria to filter out unsuitable investments and focus on those aligned with our investment thesis and objectives.",
    icon: "2.png",
  },
  {
    title: "Scouting Lead Investor",
    content:
      "Identify a lead investor who will collaborate closely with the angel group throughout the investment process, providing expertise and guidance.",
    icon: "3.png",
  },
  {
    title: "Founder Call with Angels",
    content:
      "Conduct initial discussions with the founders to understand their business, vision, and growth potential, allowing angels to gauge interest and alignment.",
    icon: "4.png",
  },
  {
    title: "Commitment from Angels",
    content:
      "Secure commitment from interested angels to participate in the investment round, outlining individual investment amounts and terms.",
    icon: "5.png",
  },
  {
    title: "Drill Down Call",
    content:
      "Conduct in-depth discussions with the founders to delve into specific aspects of the business, addressing any outstanding questions or concerns raised by the angel investors.",
    icon: "6.png",
  },
  {
    title: "Due Diligence, Angels KYC",
    content:
      "Conduct thorough due diligence on the company's finances, operations, market potential, and legal aspects while ensuring compliance with Know Your Customer (KYC) regulations for all participating angels.",
    icon: "7.png",
  },
  {
    title: "DD Report Review",
    content:
      "Review and analyze the due diligence report compiled by the team, highlighting key findings and potential risks associated with the investment opportunity.",
    icon: "8.png",
  },
  {
    title: "SHA Review",
    content:
      "Review and negotiate the Shareholders Agreement (SHA) to define the rights, obligations, and governance structure for both the investors and the founders.",
    icon: "9.png",
  },
  {
    title: "SHA Execution",
    content:
      "Finalize and execute the Shareholders Agreement once all parties are in agreement with the terms and conditions outlined, formalizing the investment commitment.",
    icon: "10.png",
  },
  {
    title: "Fund Transfer (Upon receipt of at least 50% of fund requirements)",
    content:
      "Transfer funds from the participating angels to the designated escrow account, ensuring that at least 50% of the total fund requirements are secured before proceeding further.",
    icon: "11.png",
  },
  {
    title: "Share Certificate & MIS",
    content:
      "Issue share certificates to the angel investors reflecting their ownership in the company and provide regular updates and reporting through a Management Information System (MIS) to keep investors informed about the performance of their investment.",
    icon: "12.png",
  },
];

const benefitsData = [
  {
    icon: "comprehensive.png",
    title: "Comprehensive Due Diligence",
    content:
      "Our rigorous due diligence process involves a thorough evaluation of the company's finances, operations, market potential, and legal aspects. This in-depth analysis helps identify potential risks and opportunities, enabling our angels to make informed investment decisions.",
  },
  {
    icon: "collaborative-approach.png",
    title: "Collaborative Approach",
    content:
      "By involving a dedicated lead investor and facilitating open discussions between founders and angels, our process fosters a collaborative environment. This collaborative approach ensures that expertise and insights are shared, enhancing the investment experience and increasing the chances of success.",
  },
  {
    icon: "regulatory-compliance.png",
    title: "Regulatory Compliance and Risk Mitigation",
    content:
      "Adherence to regulatory requirements, such as Know Your Customer (KYC) guidelines, and the inclusion of robust legal documentation, like the Shareholders' Agreement, help mitigate risks and protect the interests of both investors and founders. This commitment to compliance and risk management provides peace of mind to our angels.",
  },
];

const Process = () => {
  return (
    <>
      <SectionBanner
        title={"Investments Process"}
        subTitle={"Structured Pathway to Angel Investment Success"}
        bgImg={"../../../../images/investments/process/banner.png"}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <span className="block text-center uppercase text-[#4C6FFF] font-semibold">
            Our Process
          </span>
          <Heading
            heading={" Check Our Investment Process"}
            extraClasses={"text-[#131333] text-center"}
          />
          <SubHeading
            heading={
              "At O2 Angels, we follow a rigorous and structured investment process to identify promising startups and facilitate investment opportunities for our network of angels. Our streamlined approach ensures thorough evaluation, due diligence, and alignment with our investment objectives."
            }
            extraClasses={"text-center text-gray-500 mt-3 max-w-4xl mx-auto"}
          />
          <SubHeading
            heading={"The process encompasses the following key stages:"}
            extraClasses={"text-center text-gray-500 mt-3 max-w-4xl mx-auto"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {investmentProcessData.map((data, i) => (
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
                    src={`../../../../images/investments/process/process/${data.icon}`}
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

      <div className="bg-gradient-to-r from-[#C854C8] to-[#4675CA] py-14 lg:py-24 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <figure className="h-full">
                <img
                  src="../../../../images/investments/process/inv-process.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-8 bg-white p-8"
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
            >
              <Heading
                heading={" Investment Process"}
                extraClasses={"text-[#131333]"}
              />
              <p className="mt-3 text-gray-500">
                At O2 Angel, we follow a structured and comprehensive investment
                process designed to maximize returns and reduce risks. From
                proactive deal sourcing and rigorous screening to in-depth due
                diligence and legal documentation, our approach ensures a
                thorough evaluation of every opportunity.
              </p>
              <p className="mt-3 text-gray-500">
                We facilitate collaboration between our network of angels and a
                dedicated lead investor, fostering expertise and guidance
                throughout the journey. Open discussions with founders,
                commitment from interested angels, and drill-down calls address
                critical aspects of the business.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Benefits of Our Investment Process "}
            extraClasses={"text-[#131333] text-center"}
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {benefitsData.map((benefit, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <figure>
                <img
                  src={`../../../../images/investments/process/benefits/${benefit.icon}`}
                  alt="icon"
                  className="mx-auto"
                />
                <h3 className="text-lg font-semibold text-center mt-3">
                  {benefit.title}
                </h3>
                <p className="text-center mt-1">{benefit.content}</p>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Process;
