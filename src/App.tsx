import { useState } from "react";
import { StepIndicators } from "./components/StepIndicators";

function App() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex flex-col">
      <div className="background-image w-full h-43 flex items-top justify-center py-8 px-2">
        <StepIndicators step={step} />
      </div>
    </main>
  );
}

export default App;
