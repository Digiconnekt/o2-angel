import Hero from "./partials/Hero";
import Blogs from "./partials/Blogs";
import About from "./partials/About";
import Counter from "../../components/Counter/Counter";
import BenefitsOfInvestments from "./partials/BenefitsOfInvestments";
import OneLiner from "./partials/OneLiner";
import Startups from "./partials/Startups";
import WhyChooseUs from "./partials/WhyChooseUs";
import WhatUserSays from "./partials/WhatUserSays";
import Investors from "./partials/Investors";

const counterData = [
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Expert Team",
    number: 43,
  },
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Expert Team",
    number: 25,
  },
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Expert Team",
    number: 194,
  },
  {
    icon: "../../../../images/home/counter-icon.png",
    heading: "Expert Team",
    number: 148,
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Counter data={counterData} />
      <OneLiner />
      <Startups />
      <Investors />
      <div className="bg-gray-100">
        <WhyChooseUs />
      </div>
      <BenefitsOfInvestments />
      <WhatUserSays />
      <Blogs />
    </>
  );
};

export default Home;
