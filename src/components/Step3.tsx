import { ADDONS } from "../constants/constants";
import type { FormData } from "../types/types";

export const Step3 = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
  const yearly = formData.isYearly;

  const toggleAddon = (id: string) => {
    setFormData((prev) => {
      const isChecked = prev.addOns?.[id]?.checked ?? false;
      if (isChecked) {
        const { [id]: _, ...rest } = prev.addOns;
        return { ...prev, addOns: rest };
      } else {
        return {
          ...prev,
          addOns: { ...prev.addOns, [id]: { checked: true } },
        };
      }
    });
  };

  return (
    <div className="px-6 py-7.5 flex flex-col gap-5.5">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl">Pick add-ons.</h2>
        <p className="text-cool-gray mt-2 leading-6.25">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="space-y-2.75">
        {ADDONS.map((addon) => (
          <CheckOption
            key={addon.id}
            id={addon.id}
            yearly={yearly}
            checked={formData.addOns?.[addon.id]?.checked || false}
            onChange={() => toggleAddon(addon.id)}
          />
        ))}
      </div>
    </div>
  );
};

const CheckOption = ({
  id,
  yearly,
  checked,
  onChange,
}: {
  id: string;
  yearly: boolean;
  checked: boolean;
  onChange: () => void;
}) => {
  const addon = ADDONS.find((a) => a.id === id);
  if (!addon) return null;
  return (
    <label className="flex relative items-center gap-3.75 border-[1.5px] border-light-gray rounded-lg px-[14.5px] py-2.25 cursor-pointer hover:border-marine-blue has-checked:border-marine-blue has-checked:bg-magnolia transition-all">
      <input
        name={addon.label}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="opacity-0 absolute w-0 h-0 peer"
      />
      <span
        className="relative size-5 border-[1.5px] border-light-gray rounded-sm flex items-center justify-center after:absolute after:hidden after:left-1.5 after:top-[0.15rem] after:w-1.5 after:h-2.5 after:border-white after:border-2 after:border-t-0 after:border-l-0 after:rotate-45 after:peer-checked:border-purplish-blue peer-checked:bg-purplish-blue
      peer-checked:border-purplish-blue peer-checked:after:block transition-all"
      />
      <span className="flex flex-1 flex-col tracking-tight">
        <span className="font-medium text-marine-blue text-[15px]">{addon.label}</span>
        <span className="text-cool-gray text-[13px]">{addon.description}</span>
      </span>
      <span className="text-purplish-blue text-xs">
        +${yearly ? addon.price * 10 : addon.price}/{yearly ? "yr" : "mo"}
      </span>
    </label>
  );
};
