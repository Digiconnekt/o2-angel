import Heading from "../../../components/Typography/Heading";

const AnglesNetwork = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-12 items-start gap-y-10 md:gap-10 mt-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <Heading
              heading={
                "O2 Angels Network has been founded by Rajesh Ranjan and supported by his investment banking friends."
              }
              extraClasses={"text-[#131333]"}
            />

            <div className="flex gap-2 flex-row mt-5">
              <figure className="me-2">
                <img
                  src="../../../../../images/home/counter-icon.png"
                  alt="icon"
                  className="w-32"
                />
              </figure>
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <p className="mt-1 text-gray-500">
                  Rajesh Ranjan is an investment banker with over two decades
                  experience in origination, execution and placements of equity
                  shares / structured instruments. He raised over USD 2 bn for
                  more than 100 SME corporates.
                </p>
              </div>
            </div>

            <div className="flex gap-2 flex-row mt-5">
              <figure className="me-2">
                <img
                  src="../../../../../images/home/counter-icon.png"
                  alt="icon"
                  className="w-32"
                />
              </figure>
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <p className="mt-1 text-gray-500">
                  Rajesh Ranjan is an investment banker with over two decades
                  experience in origination, execution and placements of equity
                  shares / structured instruments. He raised over USD 2 bn for
                  more than 100 SME corporates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 border shadow-sm p-5 rounded-xl">
            <figure className="">
              <img
                src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
                alt="about"
                className="h-full w-full object-cover"
              />
            </figure>
            <h3 className="mt-4 text-center text-lg font-semibold">
              Rajesh Ranjan
            </h3>
            <p className="text-sm text-center mt-1 text-gray-400">FOUNDER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnglesNetwork;
