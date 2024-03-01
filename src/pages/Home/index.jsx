import Hero from "./partials/Hero";
import Blogs from "./partials/Blogs";
import About from "./partials/About";
import Counter from "./partials/Counter";
import Benefits from "./partials/Benefits";
import OneLiner from "./partials/OneLiner";
import TwoBlocks from "./partials/TwoBlocks";
import WhyChooseUs from "./partials/WhyChooseUs";
import WhatUserSays from "./partials/WhatUserSays";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Counter />
      <OneLiner />
      <TwoBlocks />
      <WhyChooseUs />
      <Benefits />
      <WhatUserSays />
      <Blogs />
    </>
  );
};

export default Home;
