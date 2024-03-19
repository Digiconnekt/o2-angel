import Heading from "../../components/Typography/Heading";
import SubHeading from "../../components/Typography/SubHeading";

const ourTeamData = [
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-1.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-2.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-2.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-3.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
  {
    icon: "../../../../../images/about/our-team-icon-3.png",
    title: "Strategy & Business",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eius sequi nesciunt est dolores vel dolore impedit rerum sit ullam!",
  },
];

const Process = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <span className="block text-center uppercase text-[#4C6FFF] font-semibold">
          Our Process
        </span>
        <Heading
          heading={" Check our Investment Process"}
          extraClasses={"text-[#131333] text-center"}
        />
        <SubHeading
          heading={
            "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
          }
          extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
        />

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
          {ourTeamData.map((data, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 bg-white shadow-sm border p-7 rounded-2xl"
            >
              <div className="flex gap-2 flex-col lg:flex-row">
                <figure className="me-2">
                  <img
                    src="../../../../../images/about/our-team-icon-1.png"
                    alt="icon"
                    className="lg:w-24"
                  />
                </figure>
                <div>
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                  <p className="mt-1 text-gray-500">{data.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#C854C8] to-[#4675CA] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <figure className="h-full">
                <img
                  src="../../../../images/blogs/blog.png"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-white p-8">
              <Heading
                heading={" Check our Investment Process"}
                extraClasses={"text-[#131333]"}
              />
              <p className="mt-3 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate fuga adipisci, nostrum expedita corporis veritatis in
                dolorum vero dolores quo autem suscipit sit excepturi quibusdam
                consequatur explicabo et enim commodi quia laudantium obcaecati
                eum! Delectus dolore voluptates, quidem dicta a officiis, aut
                facilis assumenda, libero tempore vero aspernatur laboriosam
                nostrum!
              </p>
              <p className="mt-3 text-gray-500">
                dolorum vero dolores quo autem suscipit sit excepturi quibusdam
                consequatur explicabo et enim commodi quia laudantium obcaecati
                eum! Delectus dolore voluptates, quidem dicta a officiis, aut
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <Heading
          heading={" Check our Investment Process"}
          extraClasses={"text-[#131333] text-center"}
        />
        <SubHeading
          heading={
            "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
          }
          extraClasses={"text-center text-gray-500 mt-3 max-w-3xl mx-auto"}
        />
      </div>
    </>
  );
};

export default Process;
