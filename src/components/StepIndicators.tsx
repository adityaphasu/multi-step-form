export const StepIndicators = ({ step }: { step: number }) => {
  return (
    <div className="flex items-top gap-3.75 lg:flex-col lg:gap-[1.64rem]">
      <Item step={1} active={step === 1} label="Your Info" />
      <Item step={2} active={step === 2} label="Select Plan" />
      <Item step={3} active={step === 3} label="Add-Ons" />
      <Item step={4} active={step === 4} label="Summary" />
    </div>
  );
};

const Item = ({ step, active, label }: { step: number; active: boolean; label: string }) => {
  return (
    <div className="lg:flex lg:items-center lg:gap-4">
      <span
        className={`p-2.75 border-[1.5px] size-8.25 flex items-center justify-center rounded-full font-medium  ${
          active
            ? "bg-light-blue text-marine-blue border-light-blue"
            : "bg-transparent text-white border-white"
        }`}>
        {step}
      </span>
      <div className="hidden lg:block">
        <p className="text-light-gray text-xs">STEP {step}</p>
        <p className="text-alabaster text-[15px] font-bold uppercase tracking-wide">{label}</p>
      </div>
    </div>
  );
};
