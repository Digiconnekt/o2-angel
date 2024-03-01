import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";

const benefitsData = [
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Benefit 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut labore et",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Benefit 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut labore et",
  },
  {
    icon: "../../../../images/home/benefits-icon.png",
    title: "Benefit 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et eiusmod tempor incididunt ut labore et",
  },
];

const Benefits = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <Heading
          heading={"Benefits Of Investment"}
          extraClasses={"text-center text-[#131333]"}
        />
        <SubHeading
          heading={
            "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting him"
          }
          extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
        />

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {benefitsData.map((benefit, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
              <figure>
                <img src={benefit.icon} alt="icon" className="mx-auto" />
                <h3 className="text-lg font-semibold text-center">
                  {benefit.title}
                </h3>
                <p className="text-center mt-1">{benefit.content}</p>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefits;
