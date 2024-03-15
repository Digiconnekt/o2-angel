import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Inputs/Input";
import TextArea from "../../../components/Inputs/TextArea";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";

import { FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <Heading
          heading={"Get In Touch"}
          extraClasses={"text-[#131333] text-center"}
        />
        <SubHeading
          heading={
            "We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too."
          }
          extraClasses={"text-gray-500 mt-3 max-w-3xl mx-auto text-center"}
        />

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-16">
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <form className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <Input
                  id={"name"}
                  type={"text"}
                  label={"Name"}
                  placeholder={"Enter your Name"}
                />
              </div>
              <div>
                <Input
                  id={"email"}
                  type={"email"}
                  label={"Email"}
                  placeholder={"Enter your Email"}
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  id={"phone"}
                  type={"text"}
                  label={"Phone"}
                  placeholder={"Enter your Phone Number"}
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  id={"subject"}
                  type={"text"}
                  label={"Subject"}
                  placeholder={"Write your Subject"}
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  id={"message"}
                  label={"Message"}
                  placeholder={"Write your message here..."}
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  type={"submit"}
                  title={"Submit"}
                  Icon={FaPaperPlane}
                  extraClasses={"w-full"}
                />
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-bl from-[#C854C8] to-[#4675CA] rounded-2xl p-10">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-white text-2xl font-semibold">
                Contact Information
              </h2>
              <div className="bg-white w-32 h-[2px] mt-3" />
              <ul className="mt-5">
                <li className="flex items-center gap-3 text-white mb-4">
                  <FaLocationDot /> Delhi & Mumbai, India
                </li>
                <li className="flex items-center gap-3 text-white mb-4">
                  <FaPhoneAlt /> 9856985698
                </li>
                <li className="flex items-center gap-3 text-white mb-4">
                  <MdEmail /> john@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
