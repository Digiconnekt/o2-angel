import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";

const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            heading={"Why Choose Us"}
            extraClasses={"text-center text-[#131333]"}
          />
          <SubHeading
            heading={
              "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
            }
            extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
