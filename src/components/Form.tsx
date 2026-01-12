import { useState } from "react";
import type { FormData } from "../types/types";
import { ADDONS, PLANS } from "../constants/constants";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const Form = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    isYearly: false,
    plan: {
      type: "Arcade",
    },
    addOns: {
      onlineService: { checked: true },
      largerStorage: { checked: true },
    },
  });

  const selectedPlan = PLANS.find((p) => p.label === formData.plan?.type);
  const planPrice = selectedPlan
    ? formData.isYearly
      ? selectedPlan.price * 10
      : selectedPlan.price
    : 0;

  const addonsTotal = Object.keys(formData.addOns || {}).reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? (formData.isYearly ? addon.price * 10 : addon.price) : 0);
  }, 0);

  const total = planPrice + addonsTotal;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((s) => Math.min(s + 1, 4));
  };

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} />,
    <Step3 formData={formData} setFormData={setFormData} />,
  ];

  return (
    <form
      onSubmit={handleNext}
      className="pt-1.5 flex flex-1 flex-col justify-between h-full -mt-20 gap-6">
      <div className="bg-white rounded-xl shadow-xl mx-4">{steps[step - 1]}</div>
      <div
        className={`bg-white flex px-4 pb-3 pt-4 text-[15px] ${
          step > 1 ? "justify-between" : "justify-end"
        }`}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(s - 1, 1))}
            className="cursor-pointer text-cool-gray">
            Go Back
          </button>
        )}
        <button
          type="submit"
          className="text-white bg-marine-blue px-3.75 py-2.25 rounded  cursor-pointer">
          Next Step
        </button>
      </div>
    </form>
  );
};
