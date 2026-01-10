import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export const Form = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  return (
    <form className="pt-1.5 flex-1 flex flex-col justify-between h-full -mt-20">
      {step === 1 && (
        <div className="bg-white rounded-xl shadow-xl mx-4">
          {" "}
          <Step1 />
        </div>
      )}
      {step === 2 && (
        <div className="bg-white rounded-xl shadow-xl mx-4">
          <Step2 />
        </div>
      )}
      <div
        className={`bg-white flex px-4 pb-3 pt-4 text-[15px] ${
          step > 1 ? "justify-between" : "justify-end"
        }`}>
        {step > 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="cursor-pointer text-cool-gray">
            Go Back
          </button>
        )}
        <button
          onClick={handleNext}
          type="submit"
          className="text-white bg-marine-blue px-3.75 py-2.25 rounded  cursor-pointer">
          Next Step
        </button>
      </div>
    </form>
  );
};
