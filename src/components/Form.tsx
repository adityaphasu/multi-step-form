import { useState } from "react";
import type { FormData } from "../types/types";

import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Confirm } from "./Confirm";

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
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name?.trim()) newErrors.name = "Name is required.";
    if (!formData.email?.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone?.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, "")))
      newErrors.phone = "Invalid phone number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1 && !validateStep1()) return;

    if (step === 4) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsConfirmed(true);
      }, 3000);
      return;
    }

    setStep((s) => Math.min(s + 1, 4));
  };

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} errors={errors} />,
    <Step2 formData={formData} setFormData={setFormData} />,
    <Step3 formData={formData} setFormData={setFormData} />,
    <Step4 formData={formData} setStep={setStep} />,
  ];

  return (
    <form
      onSubmit={handleNext}
      className="pt-1.5 flex flex-1 flex-col justify-between h-full -mt-20 gap-10">
      <div className="bg-white rounded-xl shadow-xl mx-4">
        {isConfirmed ? <Confirm /> : steps[step - 1]}
      </div>
      {!isConfirmed && (
        <div
          className={`bg-white flex px-4 pb-3 pt-4 text-[15px] ${
            step > 1 ? "justify-between" : "justify-end"
          }`}>
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(s - 1, 1))}
              className="cursor-pointer text-cool-gray transition-all hover:text-marine-blue font-medium">
              Go Back
            </button>
          )}
          <button
            type="submit"
            className={`text-white py-2.25 rounded  cursor-pointer transition-colors ${
              step === 4
                ? "px-5.25 bg-purplish-blue hover:bg-purplish-blue/80"
                : "bg-marine-blue px-3.75 hover:bg-marine-blue/80"
            }`}>
            {step === 4 ? (
              loading ? (
                <span className="block size-5.5 border-2 border-white rounded-full border-t-transparent animate-spin"></span>
              ) : (
                "Confirm"
              )
            ) : (
              "Next Step"
            )}
          </button>
        </div>
      )}
    </form>
  );
};
