import { ADDONS, PLANS } from "../constants/constants";
import type { FormData } from "../types/types";

export const Step4 = ({
  formData,

  setStep,
}: {
  formData: FormData;

  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
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

  const isYearly = formData.isYearly ? "yr" : "mo";
  const total = planPrice + addonsTotal;

  return (
    <div className="px-6 py-7.5 flex flex-col gap-5.5">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl">Finishing up</h2>
        <p className="text-cool-gray mt-2 leading-6.25">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-magnolia/80 rounded-lg p-4 text-sm">
        <div className="flex justify-between items-center mb-[0.77rem] border-b border-light-gray pb-2.75">
          <div className="flex flex-col items-start">
            <h3 className=" font-medium">
              {formData.plan?.type}
              <span className="ml-0.5">({formData.isYearly ? "Yearly" : "Monthly"})</span>
            </h3>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-cool-gray underline hover:text-purplish-blue transition-all cursor-pointer">
              Change
            </button>
          </div>
          <p className="text-marine-blue font-medium mt-1">
            ${planPrice}/{isYearly}
          </p>
        </div>
        <div className="space-y-3">
          {Object.keys(formData.addOns || {}).map((id) => {
            const addon = ADDONS.find((a) => a.id === id);
            if (!addon) return null;
            const addonPrice = formData.isYearly ? addon.price * 10 : addon.price;
            return (
              <div key={id} className="flex justify-between items-center text-cool-gray">
                <p>{addon.label}</p>
                <p>
                  +${addonPrice}/{isYearly}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 flex justify-between items-center text-sm">
        <p className="text-cool-gray">Total (per {formData.isYearly ? "year" : "month"})</p>
        <p className="text-purplish-blue font-bold text-[1.05rem] tracking-tight">
          +${total}/{isYearly}
        </p>
      </div>
    </div>
  );
};
