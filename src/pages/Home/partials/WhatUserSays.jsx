import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";

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
        </div>
      </div>
    </>
  );
};

export default WhatUserSays;
