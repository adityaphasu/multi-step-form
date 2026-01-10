import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import { useState } from "react";

const icons = [ArcadeIcon, AdvancedIcon, ProIcon];

export const Step2 = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [plan, setPlan] = useState<"Arcade" | "Advanced" | "Pro">("Arcade");

  return (
    <div className="px-6 py-7.5 flex flex-col gap-[1.38rem]">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl">Select your plan</h2>
        <p className="text-cool-gray mt-2 leading-6.25 pr-2">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <RadioOption
          label="Arcade"
          price={9}
          icon={icons[0]}
          yearly={isYearly}
          selected={plan === "Arcade"}
          onSelect={() => setPlan("Arcade")}
        />
        <RadioOption
          label="Advanced"
          price={12}
          icon={icons[1]}
          yearly={isYearly}
          selected={plan === "Advanced"}
          onSelect={() => setPlan("Advanced")}
        />
        <RadioOption
          label="Pro"
          price={15}
          icon={icons[2]}
          yearly={isYearly}
          selected={plan === "Pro"}
          onSelect={() => setPlan("Pro")}
        />
      </div>
      <div className="bg-magnolia flex justify-center p-[0.85rem] font-medium rounded-lg text-[15px]  gap-5.75 items-center tracking-tight mt-0.5">
        <span className={!isYearly ? "text-marine-blue" : "text-cool-gray"}>Monthly</span>
        <button
          type="button"
          onClick={() => setIsYearly((prev) => !prev)}
          className={`bg-marine-blue relative rounded-full w-9.5 h-5 mr-0.5 before:absolute before:size-2.75 before:rounded-full before:bg-white before:top-1 before:left-1.25 cursor-pointer ${
            isYearly ? "before:left-5.25" : ""
          } before:transition-all`}>
          <span className="sr-only">Toggle Billing Frequency</span>
        </button>
        <span className={isYearly ? "text-marine-blue" : "text-cool-gray"}>Yearly</span>
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
    <label className="w-full relative cursor-pointer has-checked:border-marine-blue flex px-4 py-3.5 pb-3.75 border rounded-lg border-light-gray has-checked:bg-magnolia transition-all items-start">
      <img src={icon} alt="" className="" />
      <span className="ml-3.5 flex flex-col font-medium text-marine-blue">
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
