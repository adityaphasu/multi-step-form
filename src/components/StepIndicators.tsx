export const StepIndicators = ({ step }: { step: number }) => {
  return (
    <div className="flex items-top gap-3.75">
      <Item step={1} active={step === 1} />
      <Item step={2} active={step === 2} />
      <Item step={3} active={step === 3} />
      <Item step={4} active={step === 4} />
    </div>
  );
};

const Item = ({ step, active }: { step: number; active: boolean }) => {
  return (
    <div
      className={`p-2.75 border-[1.5px] h-8 flex items-center justify-center rounded-full font-medium  ${
        active
          ? "bg-light-blue text-marine-blue border-light-blue"
          : "bg-transparent text-white border-white"
      }`}>
      {step}
    </div>
  );
};
