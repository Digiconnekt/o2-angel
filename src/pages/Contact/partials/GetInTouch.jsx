import { motion } from "framer-motion";
import Button from "../../../components/Buttons/Button";
import Input from "../../../components/Inputs/Input";
import TextArea from "../../../components/Inputs/TextArea";
import Heading from "../../../components/Typography/Heading";
import SubHeading from "../../../components/Typography/SubHeading";
import { FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../../utils/framerMotionHelper";
import useContact from "../../../apis/contact";
import { useEffect, useState } from "react";

const GetInTouch = () => {
  const { contactReq, data, error, setError, isLoading } = useContact();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    contactReq(formData);

    console.log("formData", formData);
  };

  useEffect(() => {
    if (data) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setError([]);
    }
  }, [data]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24">
        <motion.div
          variants={fadeInBottom()}
          initial="hidden"
          whileInView="visible"
        >
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
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-16">
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-8"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <form className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <Input
                  id={"name"}
                  type={"text"}
                  label={"Name"}
                  placeholder={"Enter your Name"}
                  value={formData.name}
                  onChange={(value) => onChangeHandler("name", value)}
                  error={
                    error?.errors?.name ? error?.errors?.name[0] : undefined
                  }
                />
              </div>
              <div>
                <Input
                  id={"email"}
                  type={"email"}
                  label={"Email"}
                  placeholder={"Enter your Email"}
                  value={formData.email}
                  onChange={(value) => onChangeHandler("email", value)}
                  error={
                    error?.errors?.email ? error?.errors?.email[0] : undefined
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  id={"phone"}
                  type={"text"}
                  label={"Phone"}
                  placeholder={"Enter your Phone Number"}
                  value={formData.phone}
                  onChange={(value) => onChangeHandler("phone", value)}
                  error={
                    error?.errors?.phone ? error?.errors?.phone[0] : undefined
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  id={"subject"}
                  type={"text"}
                  label={"Subject"}
                  placeholder={"Write your Subject"}
                  value={formData.subject}
                  onChange={(value) => onChangeHandler("subject", value)}
                  error={
                    error?.errors?.subject
                      ? error?.errors?.subject[0]
                      : undefined
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  id={"message"}
                  label={"Message"}
                  placeholder={"Write your message here..."}
                  value={formData.message}
                  onChange={(value) => onChangeHandler("message", value)}
                  error={
                    error?.errors?.message
                      ? error?.errors?.message[0]
                      : undefined
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  type={"button"}
                  title={"Submit"}
                  Icon={FaPaperPlane}
                  extraClasses={"w-full"}
                  onClick={submitHandler}
                  isLoading={isLoading}
                />
              </div>
            </form>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-bl from-[#C854C8] to-[#4675CA] rounded-2xl p-10"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
