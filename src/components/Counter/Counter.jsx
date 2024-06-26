/* eslint-disable react/prop-types */
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = ({ data, numColor = "text-black" }) => {
  const [scrollTriggered, setScrollTriggered] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setScrollTriggered(true)}
        onExit={() => setScrollTriggered(false)}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 border-t border-[#dcdcdc]">
          <div className="grid grid-cols-12 gap-y-10 md:gap-10">
            {data.map((counter, i) => (
              <div key={i} className="col-span-6 lg:col-span-3">
                <div className="flex items-center gap-3 sm:gap-5">
                  {counter.icon && (
                    <figure className="bg-gray-100 p-2 sm:p-4 rounded-full">
                      <img src={counter.icon} alt="Icon" className="w-10" />
                    </figure>
                  )}
                  <div>
                    <h2
                      className={`text-3xl sm:text-4xl font-bold ${numColor}`}
                    >
                      {scrollTriggered && (
                        <CountUp start={0} end={counter.number} duration={2} />
                      )}
                      +
                    </h2>
                    <p className="text-gray-400 mt-1 text-sm sm:text-md">
                      {counter.heading}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Counter;
