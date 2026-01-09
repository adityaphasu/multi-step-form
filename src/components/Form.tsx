import { Step1 } from "./Step1";

export const Form = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <form className="pt-1.5 flex-1 flex flex-col justify-between h-full">
      <div className="bg-white rounded-xl shadow-xl -mt-20 mx-4">{step === 1 && <Step1 />}</div>
      <div className="bg-white flex justify-end px-4 pb-3 pt-4">
        <button className="text-white bg-marine-blue px-3.75 py-2.25 rounded text-[15px]">
          Next Step
        </button>
      </div>
    </form>
  );
};
