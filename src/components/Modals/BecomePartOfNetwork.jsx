/* eslint-disable react/prop-types */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import ButtonOutline from "../Buttons/ButtonOutline";
import InputRadio from "../Inputs/InputRadio";
import { RxCross1 } from "react-icons/rx";
import useBecomePartOfOurNetwork from "../../apis/becomePartOfOurNetwork";

export default function BecomePartOfNetwork({ isOpen, setIsOpen }) {
  const { becomePartOfOurNetworkReq, data, error, setError, isLoading } =
    useBecomePartOfOurNetwork();

  const [pageNum, setPageNum] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    linkedinId: "",
    annualInvestmentTarget: "",
    currentPortfolioIncludes: "",
    wouldYouLikeToActAsMentor: "",
    disclaimer: "",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  function closeModal() {
    setIsOpen(false);
    setPageNum(1);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    becomePartOfOurNetworkReq(formData);
  };

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",
        linkedinId: "",
        annualInvestmentTarget: "",
        currentPortfolioIncludes: "",
        wouldYouLikeToActAsMentor: "",
        disclaimer: "",
      });
      closeModal();
      setError([]);
    }
  }, [data]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900 flex items-center justify-between"
                  >
                    Become Part Of Our Network
                    <RxCross1 onClick={closeModal} className="cursor-pointer" />
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      please fill out below details.
                    </p>

                    <form className="border-t-2 mt-4 pt-4 grid grid-cols-12 gap-5">
                      {pageNum === 1 && (
                        <>
                          <div className="col-span-12 sm:col-span-6">
                            <Input
                              id={"firstName"}
                              type={"text"}
                              label={"First Name *"}
                              placeholder={"Enter your First Name"}
                              value={formData.firstName}
                              onChange={(value) =>
                                onChangeHandler("firstName", value)
                              }
                              error={
                                error?.errors?.firstName
                                  ? error?.errors?.firstName[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <Input
                              id={"lastName"}
                              type={"text"}
                              label={"Last Name *"}
                              placeholder={"Enter your Last Name"}
                              value={formData.lastName}
                              onChange={(value) =>
                                onChangeHandler("lastName", value)
                              }
                              error={
                                error?.errors?.lastName
                                  ? error?.errors?.lastName[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <Input
                              id={"email"}
                              type={"email"}
                              label={"Email *"}
                              placeholder={"Enter your Email"}
                              value={formData.email}
                              onChange={(value) =>
                                onChangeHandler("email", value)
                              }
                              error={
                                error?.errors?.email
                                  ? error?.errors?.email[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <Input
                              id={"country"}
                              type={"text"}
                              label={"Country *"}
                              placeholder={"Enter your Country"}
                              value={formData.country}
                              onChange={(value) =>
                                onChangeHandler("country", value)
                              }
                              error={
                                error?.errors?.country
                                  ? error?.errors?.country[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12">
                            <Input
                              id={"phone"}
                              type={"text"}
                              label={"Phone (with country code) *"}
                              placeholder={"Enter your Phone"}
                              value={formData.phone}
                              onChange={(value) =>
                                onChangeHandler("phone", value)
                              }
                              error={
                                error?.errors?.phone
                                  ? error?.errors?.phone[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12">
                            <Input
                              id={"linkedinId"}
                              type={"text"}
                              label={"Linkedin Id"}
                              placeholder={"Enter your Linkedin Id"}
                              value={formData.linkedinId}
                              onChange={(value) =>
                                onChangeHandler("linkedinId", value)
                              }
                              error={
                                error?.errors?.linkedinId
                                  ? error?.errors?.linkedinId[0]
                                  : undefined
                              }
                            />
                          </div>

                          <div className="mt-5 col-span-12">
                            <Button
                              type={"button"}
                              title={"Next"}
                              extraClasses={"w-full"}
                              onClick={() => setPageNum(2)}
                            />
                          </div>
                        </>
                      )}

                      {pageNum === 2 && (
                        <>
                          <div className="col-span-12">
                            <InputRadio
                              label={"Annual Investment Target"}
                              options={[
                                {
                                  id: "10-20",
                                  name: "annual-investment-target",
                                  title: "INR 10 - 20 Lacs / USD 15 - 30K",
                                },
                                {
                                  id: "21-50",
                                  name: "annual-investment-target",
                                  title: "INR 21 - 50 Lacs / USD 31 - 70K",
                                },
                                {
                                  id: "above-50",
                                  name: "annual-investment-target",
                                  title: "Above INR 50 Lacs / USD 71K+",
                                },
                              ]}
                              value={formData.annualInvestmentTarget}
                              onChange={(value) =>
                                onChangeHandler("annualInvestmentTarget", value)
                              }
                              error={
                                error?.errors?.annualInvestmentTarget
                                  ? error?.errors?.annualInvestmentTarget[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12">
                            <Input
                              id={"current-portfolio-includes"}
                              type={"text"}
                              label={"Current Portfolio Includes *"}
                              placeholder={
                                "Enter your Current Portfolio Includes"
                              }
                              value={formData.currentPortfolioIncludes}
                              onChange={(value) =>
                                onChangeHandler(
                                  "currentPortfolioIncludes",
                                  value
                                )
                              }
                              error={
                                error?.errors?.currentPortfolioIncludes
                                  ? error?.errors?.currentPortfolioIncludes[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12">
                            <InputRadio
                              label={
                                "Would you like to act as mentor/advisor to Startups?"
                              }
                              options={[
                                {
                                  id: "yes",
                                  name: "would-like-to-act-as-mentor",
                                  title: "Yes",
                                },
                                {
                                  id: "no",
                                  name: "would-like-to-act-as-mentor",
                                  title: "No",
                                },
                                {
                                  id: "may be",
                                  name: "would-like-to-act-as-mentor",
                                  title: "May be",
                                },
                              ]}
                              value={formData.wouldYouLikeToActAsMentor}
                              onChange={(value) =>
                                onChangeHandler(
                                  "wouldYouLikeToActAsMentor",
                                  value
                                )
                              }
                              error={
                                error?.errors?.wouldYouLikeToActAsMentor
                                  ? error?.errors?.wouldYouLikeToActAsMentor[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12">
                            <InputRadio
                              label={
                                "I have read and understand the given disclaimer* about underlying risks associated with such investments/ventures. *"
                              }
                              options={[
                                {
                                  id: "disclaimer-yes",
                                  name: "disclaimer",
                                  title: "Yes",
                                },
                              ]}
                              value={formData.disclaimer}
                              onChange={(value) =>
                                onChangeHandler("disclaimer", value)
                              }
                              error={
                                error?.errors?.disclaimer
                                  ? error?.errors?.disclaimer[0]
                                  : undefined
                              }
                            />
                          </div>

                          <div className="mt-5 col-span-12 sm:col-span-6">
                            <ButtonOutline
                              type={"button"}
                              title={"Previous"}
                              extraClasses={"w-full"}
                              onClick={() => setPageNum(1)}
                            />
                          </div>
                          <div className="mt-5 col-span-12 sm:col-span-6">
                            <Button
                              type={"button"}
                              title={"Submit"}
                              extraClasses={"w-full"}
                              onClick={submitHandler}
                              isLoading={isLoading}
                            />
                          </div>
                        </>
                      )}
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
