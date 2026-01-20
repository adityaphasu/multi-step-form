import type { FormData, Plan } from "../types/types";
import { PLANS } from "../constants/constants";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

const ICONS = [ArcadeIcon, AdvancedIcon, ProIcon];

export const Step2 = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
  const yearly = formData?.isYearly || false;

  const toggleYearly = () => setFormData((prev) => ({ ...prev, isYearly: !prev.isYearly }));

  const selectPlan = (type: Plan) => {
    setFormData((prev) => ({
      ...prev,
      plan: {
        type,
      },
    }));
  };

  return (
    <div className="px-6 py-7.5 flex flex-col gap-[1.38rem] 2xl:pb-13 2xl:gap-4.25">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl lg:text-[2rem]">Select your plan</h2>
        <p className="text-cool-gray mt-2 leading-6.25 pr-2 lg:mt-1.5">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-4 2xl:gap-7.25 lg:pt-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-evenly lg:gap-4.5">
          {PLANS.map((plan, index) => (
            <RadioOption
              key={plan.label}
              label={plan.label}
              price={plan.price}
              icon={ICONS[index]}
              yearly={yearly}
              selected={formData?.plan?.type === plan.label}
              onSelect={() => selectPlan(plan.label as Plan)}
            />
          ))}
        </div>
        <div className="bg-magnolia flex justify-center p-[0.85rem] font-medium rounded-lg text-[15px]  gap-5.75 items-center tracking-tight mt-0.5 lg:pr-6.75">
          <span className={!yearly ? "text-marine-blue" : "text-cool-gray"}>Monthly</span>
          <button
            type="button"
            onClick={toggleYearly}
            className={`bg-marine-blue relative rounded-full w-9.5 h-5 mr-0.5 before:absolute before:size-2.75 before:rounded-full before:bg-white before:top-1 before:left-1.25 cursor-pointer  ${
              yearly ? "before:left-5.25" : ""
            } before:transition-all`}>
            <span className="sr-only">Toggle Billing Frequency</span>
          </button>
          <span className={yearly ? "text-marine-blue" : "text-cool-gray"}>Yearly</span>
        </div>
      </div>
    </div>
  );
};

const RadioOption = ({
  label,
  price,
  icon,
  yearly,
  selected,
  onSelect,
}: {
  label: string;
  price: number;
  icon: string;
  yearly: boolean;
  selected: boolean;
  onSelect: () => void;
}) => {
  return (
    <label className="w-full relative cursor-pointer has-checked:border-marine-blue flex px-4 py-3.5 pb-3.75 border-[1.5px] rounded-lg border-light-gray has-checked:bg-magnolia transition-all items-start hover:border-marine-blue lg:flex-col lg:justify-between gap-7.25 2xl:gap-10 lg:px-3.75 lg:py-3 lg:border-2">
      <img src={icon} alt="" className="mt-1.5" />
      <span className="ml-3.5 flex flex-col font-medium text-marine-blue lg:ml-0">
        {label}{" "}
        <span className="text-[15px] text-cool-gray font-normal tracking-tighter">
          ${yearly ? price * 10 : price}/{yearly ? "yr" : "mo"}
        </span>
        {yearly && (
          <span className="text-[13px] text-marine-blue font-normal mt-[2.5px]">2 months free</span>
        )}
      </span>
      <input
        type="radio"
        name="plan"
        className="absolute opacity-0"
        checked={selected}
        onChange={onSelect}
      />
    </label>
  );
};
