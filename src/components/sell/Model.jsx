import React, { useState, useEffect } from "react";

function Model({ vehicleDetails, setVehicleDetails, setStep, data }) {

  const models = data?.[vehicleDetails.brand]?.[vehicleDetails.type] || [];

  const [otherModel, setOtherModel] = useState("");

  const isOtherSelected =
    vehicleDetails.model && !models.includes(vehicleDetails.model);

  useEffect(() => {
    if (isOtherSelected  && vehicleDetails.model !== "Other") {
      setOtherModel(vehicleDetails.model);
    }
  }, [vehicleDetails.model]);

  function handleModelClick(model) {
    setVehicleDetails({
      ...vehicleDetails,
      model: model
    });

    setStep(4);
  }

  function handleOtherClick() {
    setOtherModel("")
    setVehicleDetails({
      ...vehicleDetails,
      model: "Other"
    });
  }

  function handleNext() {
    if (!otherModel) return;

    setVehicleDetails({
      ...vehicleDetails,
      model: otherModel
    });

    setStep(4);
  }

  return (
    <div className="px-20 py-10">

      {/* Heading */}
      <p className="text-3xl font-bold pb-10">
        Select the <span className="text-secondary">Model</span> of your two-wheeler
      </p>

      {/* Model Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {models.map((model) => {

          const selected = vehicleDetails.model === model;

          return (
            <div
              key={model}
              onClick={() => handleModelClick(model)}
              className={`border rounded-xl p-6 text-center cursor-pointer transition duration-200
              
              ${
                selected
                  ? "border-secondary bg-secondary text-white shadow-md scale-105"
                  : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
              }
              `}
            >
              <p className={`text-lg font-semibold ${selected ? "text-white" : "text-gray-700"}`}>
                {model}
              </p>
            </div>
          );
        })}

        {/* Other Button */}
        <div
          onClick={handleOtherClick}
          className={`border rounded-xl p-6 text-center cursor-pointer transition duration-200 text-lg font-semibold
          
          ${
            isOtherSelected || vehicleDetails.model === "Other"
              ? "border-secondary bg-secondary text-white shadow-md scale-105"
              : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
          }
          `}
        >
          Other
        </div>

      </div>

      {/* Other Model Input */}
      {(vehicleDetails.model === "Other" || isOtherSelected) && (
        <div className="mt-6 max-w-md">

          <label className="text-secondary block mb-2">
            Enter Model Name
          </label>

          <input
            type="text"
            value={otherModel}
            onChange={(e) => setOtherModel(e.target.value)}
            placeholder="Enter model name"
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-secondary"
          />

          <button
            onClick={handleNext}
            disabled={!otherModel}
            className="bg-secondary text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
}

export default Model;