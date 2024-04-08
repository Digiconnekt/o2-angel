import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";
import { motion } from "framer-motion";
import { fadeInBottom } from "../../../utils/framerMotionHelper";

const benefitsData = [
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Wealth Accumulation",
    content:
      "Grow your wealth over time by earning attractive returns on your investments, helping you achieve your financial goals and secure a prosperous future.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Passive Income Generation",
    content:
      "Invest in dividend-paying stocks, rental properties, and other income-generating assets to create regular streams of passive income.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Inflation Hedge",
    content:
      "Outpace inflation by investing in assets that appreciate in value, ensuring your savings maintain their purchasing power over the long term.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Portfolio Diversification",
    content:
      "Diversify your investment portfolio across various asset classes, industries, and regions to spread risk and minimize the impact of market volatility.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Tax Optimization",
    content:
      "Benefit from tax advantages offered by certain investment vehicles, optimizing your tax efficiency and maximizing your after-tax returns.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Goal Achievement",
    content:
      "Realize your financial aspirations, whether it's saving for retirement, buying a home, funding education, or starting a business, by investing strategically.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Compound Growth",
    content:
      "Harness the power of compounding, allowing your investment returns to generate additional earnings over time for exponential portfolio growth.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Hedge Against Economic Uncertainty",
    content:
      "Invest in assets like gold, real estate, or bonds to protect your portfolio against economic downturns and market volatility, providing stability and security.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Financial Control",
    content:
      "Take control of your financial future by actively managing your investments, making informed decisions, and adapting to changing market conditions.",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Legacy Building",
    content:
      "Build a lasting legacy for future generations by investing wisely, and providing financial security and stability for your loved ones.",
  },
];

const BenefitsOfInvestments = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            heading={"Benefits Of Investment"}
            extraClasses={"text-center text-[#131333]"}
          />
          <SubHeading
            heading={
              "Paving the Path to Wealth Mastery; Unrivaled Returns, Exponential Expansion"
            }
            extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
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
                <img src={benefit.icon} alt="icon" className="mx-auto" />
                <h3 className="text-lg font-semibold text-center">
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

export default BenefitsOfInvestments;
