import React from "react";

function StepCounter({ step, setStep }) {

  const steps = [
    "Brand",
    "Vehicle Type",
    "Model",
    "Model Year",
    "Colour",
    "Purchase Details",
    "Owner",
    "Photos & Registration",
    "Inspection",
    "Contact"
  ];

  function goBack() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="flex justify-end mb-2">
        <p className="text-sm text-gray-500 font-medium">{step}/10</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
        <div className="flex items-start gap-2 flex-wrap">

          {/* Back Arrow */}
          {step > 1 && (
            <button
              onClick={goBack}
              className="text-gray-500 hover:text-black text-xl font-bold mr-2 mt-1"
            >
              ←
            </button>
          )}

          {steps.map((name, index) => {

            const stepNumber = index + 1;

            return (
              <button
                key={index}
                className={`text-sm font-semibold rounded-full px-4 py-2 border transition-all
                ${
                  step >= stepNumber
                    ? "bg-secondary text-white border-secondary"
                    : "text-gray-600"
                }`}
                onClick={() => {if(step >= stepNumber){setStep(stepNumber)}}}
              >
                {name}
              </button>
            );
          })}

        </div>
      </div>

    </div>
  );
}

export default StepCounter;