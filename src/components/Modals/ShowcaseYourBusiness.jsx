/* eslint-disable react/prop-types */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import Button from "../Buttons/Button";
import ButtonOutline from "../Buttons/ButtonOutline";
import { RxCross1 } from "react-icons/rx";
import useShowcaseYourBusiness from "../../apis/showcaseYourBusiness";

export default function ShowcaseYourBusiness({ isOpen, setIsOpen }) {
  const { showcaseYourBusinessReq, data, error, setError, isLoading } =
    useShowcaseYourBusiness();

  const [pageNum, setPageNum] = useState(1);
  const [formData, setFormData] = useState({
    presenterFirstName: "",
    presenterLastName: "",
    email: "",
    companyName: "",
    advisorFirstName: "",
    advisorLastName: "",
    phone: "",
    elevatorPitchScore: "",
    elevatorPitchNote: "",
    painAreaScore: "",
    painAreaNote: "",
    uniqueValueScore: "",
    uniqueValueNote: "",
    marketOpportunityScore: "",
    marketOpportunityNote: "",
    businessModelScore: "",
    businessModelNote: "",
    competitionScore: "",
    competitionNote: "",
    marketingStrategyScore: "",
    marketingStrategyNote: "",
    salesStrategyScore: "",
    salesStrategyNote: "",
    userFeedbackScore: "",
    userFeedbackNote: "",
    teamScore: "",
    teamNote: "",
    financialScore: "",
    financialNote: "",
    investmentScore: "",
    investmentNote: "",
    otherScore: "",
    otherNote: "",
    totalScore: "",
    additionalNote: "",
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
    showcaseYourBusinessReq(formData);
  };

  useEffect(() => {
    if (data) {
      setFormData({
        presenterFirstName: "",
        presenterLastName: "",
        email: "",
        companyName: "",
        advisorFirstName: "",
        advisorLastName: "",
        phone: "",
        elevatorPitchScore: "",
        elevatorPitchNote: "",
        painAreaScore: "",
        painAreaNote: "",
        uniqueValueScore: "",
        uniqueValueNote: "",
        marketOpportunityScore: "",
        marketOpportunityNote: "",
        businessModelScore: "",
        businessModelNote: "",
        competitionScore: "",
        competitionNote: "",
        marketingStrategyScore: "",
        marketingStrategyNote: "",
        salesStrategyScore: "",
        salesStrategyNote: "",
        userFeedbackScore: "",
        userFeedbackNote: "",
        teamScore: "",
        teamNote: "",
        financialScore: "",
        financialNote: "",
        investmentScore: "",
        investmentNote: "",
        otherScore: "",
        otherNote: "",
        totalScore: "",
        additionalNote: "",
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
                    Showcase Your Business To Our Investors
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
                              id={"presenterFirstName"}
                              type={"text"}
                              label={"Presenter First Name *"}
                              placeholder={"Enter Presenter First Name"}
                              value={formData.presenterFirstName}
                              onChange={(value) =>
                                onChangeHandler("presenterFirstName", value)
                              }
                              error={
                                error?.errors?.presenterFirstName
                                  ? error?.errors?.presenterFirstName[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <Input
                              id={"presenterLastName"}
                              type={"text"}
                              label={"Presenter Last Name *"}
                              placeholder={"Enter Presenter Last Name"}
                              value={formData.presenterLastName}
                              onChange={(value) =>
                                onChangeHandler("presenterLastName", value)
                              }
                              error={
                                error?.errors?.presenterLastName
                                  ? error?.errors?.presenterLastName[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12  sm:col-span-6">
                            <Input
                              id={"companyName"}
                              type={"text"}
                              label={"Company Name *"}
                              placeholder={"Enter Company Name"}
                              value={formData.companyName}
                              onChange={(value) =>
                                onChangeHandler("companyName", value)
                              }
                              error={
                                error?.errors?.companyName
                                  ? error?.errors?.companyName[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12  sm:col-span-6">
                            <Input
                              id={"email"}
                              type={"text"}
                              label={"Email *"}
                              placeholder={"Email"}
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
                              id={"advisorFirstName"}
                              type={"text"}
                              label={"Advisor First Name *"}
                              placeholder={"Enter Advisor First Name"}
                              value={formData.advisorFirstName}
                              onChange={(value) =>
                                onChangeHandler("advisorFirstName", value)
                              }
                              error={
                                error?.errors?.advisorFirstName
                                  ? error?.errors?.advisorFirstName[0]
                                  : undefined
                              }
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <Input
                              id={"advisorLastName"}
                              type={"text"}
                              label={"Advisor Last Name *"}
                              placeholder={"Enter Advisor Last Name"}
                              value={formData.advisorLastName}
                              onChange={(value) =>
                                onChangeHandler("advisorLastName", value)
                              }
                              error={
                                error?.errors?.advisorLastName
                                  ? error?.errors?.advisorLastName[0]
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
                          <div className="col-span-12 overflow-x-scroll md:overflow-auto">
                            <label className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                              Please evaluate the startup according to
                              followings *
                            </label>
                            <table className="border-collapse border border-slate-500 w-[500px] md:w-full">
                              <thead>
                                <tr>
                                  <th className="border border-slate-600 text-sm font-semibold p-2 bg-gray-200 w-32 md:w-52"></th>
                                  <th className="border border-slate-600 text-sm font-semibold p-2 bg-gray-200 w-32 md:w-52">
                                    Score
                                  </th>
                                  <th className="border border-slate-600 text-sm font-semibold p-2 bg-gray-200 w-32 md:w-52">
                                    Notes
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Elevator Pitch
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"elevatorPitchScore"}
                                      type={"text"}
                                      value={formData.elevatorPitchScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "elevatorPitchScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.elevatorPitchScore
                                          ? error?.errors?.elevatorPitchScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"elevatorPitchNote"}
                                      type={"text"}
                                      value={formData.elevatorPitchNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "elevatorPitchNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.elevatorPitchNote
                                          ? error?.errors?.elevatorPitchNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Pain Area/ Problem
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"painAreaScore"}
                                      type={"text"}
                                      value={formData.painAreaScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler("painAreaScore", value)
                                      }
                                      error={
                                        error?.errors?.painAreaScore
                                          ? error?.errors?.painAreaScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"painAreaNote"}
                                      type={"text"}
                                      value={formData.painAreaNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler("painAreaNote", value)
                                      }
                                      error={
                                        error?.errors?.painAreaNote
                                          ? error?.errors?.painAreaNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Unique Value Proposition
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"uniqueValueScore"}
                                      type={"text"}
                                      value={formData.uniqueValueScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "uniqueValueScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.uniqueValueScore
                                          ? error?.errors?.uniqueValueScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"uniqueValueNote"}
                                      type={"text"}
                                      value={formData.uniqueValueNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "uniqueValueNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.uniqueValueNote
                                          ? error?.errors?.uniqueValueNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Market Opportunity
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"marketOpportunityScore"}
                                      type={"text"}
                                      value={formData.marketOpportunityScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "marketOpportunityScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.marketOpportunityScore
                                          ? error?.errors
                                              ?.marketOpportunityScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"marketOpportunityNote"}
                                      type={"text"}
                                      value={formData.marketOpportunityNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "marketOpportunityNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.marketOpportunityNote
                                          ? error?.errors
                                              ?.marketOpportunityNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Business Model
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"businessModelScore"}
                                      type={"text"}
                                      value={formData.businessModelScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "businessModelScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.businessModelScore
                                          ? error?.errors?.businessModelScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"businessModelNote"}
                                      type={"text"}
                                      value={formData.businessModelNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "businessModelNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.businessModelNote
                                          ? error?.errors?.businessModelNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Competition
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"competitionScore"}
                                      type={"text"}
                                      value={formData.competitionScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "competitionScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.competitionScore
                                          ? error?.errors?.competitionScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"competitionNote"}
                                      type={"text"}
                                      value={formData.competitionNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "competitionNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.competitionNote
                                          ? error?.errors?.competitionNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Marketing Strategy
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"marketingStrategyScore"}
                                      type={"text"}
                                      value={formData.marketingStrategyScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "marketingStrategyScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.marketingStrategyScore
                                          ? error?.errors
                                              ?.marketingStrategyScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"marketingStrategyNote"}
                                      type={"text"}
                                      value={formData.marketingStrategyNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "marketingStrategyNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.marketingStrategyNote
                                          ? error?.errors
                                              ?.marketingStrategyNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Sales Strategy
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"salesStrategyScore"}
                                      type={"text"}
                                      value={formData.salesStrategyScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "salesStrategyScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.salesStrategyScore
                                          ? error?.errors?.salesStrategyScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"salesStrategyNote"}
                                      type={"text"}
                                      value={formData.salesStrategyNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "salesStrategyNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.salesStrategyNote
                                          ? error?.errors?.salesStrategyNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    User Feedback
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"userFeedbackScore"}
                                      type={"text"}
                                      value={formData.userFeedbackScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "userFeedbackScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.userFeedbackScore
                                          ? error?.errors?.userFeedbackScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"userFeedbackNote"}
                                      type={"text"}
                                      value={formData.userFeedbackNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "userFeedbackNote",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.userFeedbackNote
                                          ? error?.errors?.userFeedbackNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Team
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"teamScore"}
                                      type={"text"}
                                      value={formData.teamScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler("teamScore", value)
                                      }
                                      error={
                                        error?.errors?.teamScore
                                          ? error?.errors?.teamScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"teamNote"}
                                      type={"text"}
                                      value={formData.teamNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler("teamNote", value)
                                      }
                                      error={
                                        error?.errors?.teamNote
                                          ? error?.errors?.teamNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Financials
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"financialScore"}
                                      type={"text"}
                                      value={formData.financialScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler("financialScore", value)
                                      }
                                      error={
                                        error?.errors?.financialScore
                                          ? error?.errors?.financialScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"financialNote"}
                                      type={"text"}
                                      value={formData.financialNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler("financialNote", value)
                                      }
                                      error={
                                        error?.errors?.financialNote
                                          ? error?.errors?.financialNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Investment
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"investmentScore"}
                                      type={"text"}
                                      value={formData.investmentScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler(
                                          "investmentScore",
                                          value
                                        )
                                      }
                                      error={
                                        error?.errors?.investmentScore
                                          ? error?.errors?.investmentScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"investmentNote"}
                                      type={"text"}
                                      value={formData.investmentNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler("investmentNote", value)
                                      }
                                      error={
                                        error?.errors?.investmentNote
                                          ? error?.errors?.investmentNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-slate-700 text-sm p-2">
                                    Other
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"otherScore"}
                                      type={"text"}
                                      value={formData.otherScore}
                                      placeholder={"add score"}
                                      onChange={(value) =>
                                        onChangeHandler("otherScore", value)
                                      }
                                      error={
                                        error?.errors?.otherScore
                                          ? error?.errors?.otherScore[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                  <td className="border border-slate-700 text-sm p-2">
                                    <Input
                                      id={"otherNote"}
                                      type={"text"}
                                      value={formData.otherNote}
                                      placeholder={"add note"}
                                      onChange={(value) =>
                                        onChangeHandler("otherNote", value)
                                      }
                                      error={
                                        error?.errors?.otherNote
                                          ? error?.errors?.otherNote[0]
                                          : undefined
                                      }
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="col-span-12">
                            <Input
                              id={"totalScore"}
                              type={"text"}
                              label={"Total Score *"}
                              placeholder={"Enter Total Score"}
                              value={formData.totalScore}
                              onChange={(value) =>
                                onChangeHandler("totalScore", value)
                              }
                              error={
                                error?.errors?.totalScore
                                  ? error?.errors?.totalScore[0]
                                  : undefined
                              }
                            />
                          </div>

                          <div className="col-span-12">
                            <TextArea
                              id={"additionalNote"}
                              label={"Additional Note"}
                              placeholder={"Write your additional note here..."}
                              value={formData.additionalNote}
                              onChange={(value) =>
                                onChangeHandler("additionalNote", value)
                              }
                              error={
                                error?.errors?.additionalNote
                                  ? error?.errors?.additionalNote[0]
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
