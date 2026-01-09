import { useState } from "react";
import { Form } from "./components/Form";
import { StepIndicators } from "./components/StepIndicators";

function App() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="background-image w-full h-43 flex items-top justify-center py-8 px-2">
        <StepIndicators step={step} />
      </div>
      <Form step={step} setStep={setStep} />
    </main>
  );
}

export default App;
