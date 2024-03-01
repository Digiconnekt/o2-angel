/* eslint-disable react/no-unescaped-entities */
import ButtonLink from "../../../components/Buttons/ButtonLink";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";

const About = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <Heading
          heading={"About Us"}
          extraClasses={"text-center text-[#131333]"}
        />
        <SubHeading
          heading={
            "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
          }
          extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
        />

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#131333]">
              A faster way to do just about anything
            </h2>
            <h3 className="text-lg">
              Clarinet accustomed. Would legs of framework officers. We've to
              morning like a contracting him, the the to said in need gradually
              wellfeigned.
            </h3>

            <div className="flex mt-10 gap-5">
              <figure>
                <img src="../../../../images/home/about-men.png" alt="About" />
              </figure>
              <div>
                <h3 className="text-lg font-semibold">Rajesh Ranjan</h3>
                <p className="text-[#C854C8]">Founder</p>
                <p className="max-w-sm">
                  Get peace of mind by choosing the best insurance provider for
                  you.
                </p>
              </div>
            </div>

            <ButtonLink
              to={"#"}
              title={"Discover More"}
              extraClasses={"inline-block mt-8"}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <figure>
              <img
                src="../../../../images/home/about.png"
                alt="About"
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
