import { NavLink } from "react-router-dom";

const OneLiner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C854C8] to-[#4675CA] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center leading-[40px] md:leading-[70px]">
            Investors supporting startups into{" "}
            <span className="text-[#FEC713]">new emerging technologies</span>{" "}
            without any disparity
          </h2>

          <div className="text-center mt-5">
            <NavLink
              to={"#"}
              className={
                "bg-white text-primary py-3 px-5 rounded-3xl hover:bg-secondary hover:text-white text-md font-semibold"
              }
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneLiner;
