import { useState } from "react";
import { Form } from "./components/Form";
import { StepIndicators } from "./components/StepIndicators";

function App() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen flex flex-col lg:grid lg:grid-cols-[17.15rem_1fr] lg:bg-white lg:justify-center lg:mx-auto lg:min-h-auto lg:rounded-xl lg:shadow-xl lg:px-4 lg:py-4 lg:min-w-235 lg:gap-19">
      <div className="background-image w-full h-43 flex items-top justify-center py-8 px-2 lg:w-auto lg:rounded-lg lg:py-9.5 lg:h-auto lg:justify-start lg:px-8">
        <StepIndicators step={step} />
      </div>
      <Form step={step} setStep={setStep} />
    </main>
  );
}

export default App;
