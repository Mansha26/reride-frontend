import React from "react";

function Inspection({ vehicleDetails, setVehicleDetails, setStep }) {
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVehicleDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function saveInspectionDetails() {
    setStep(10);
  }

  return (
    <div id="step-9" className="px-5 sm:px-10 py-8 max-w-xl mx-auto">

      <p className="text-2xl sm:text-3xl font-bold pb-8">
        Inspection Details
      </p>

      {/* Inspection Date */}
      <label className="block text-gray-700 font-medium mb-2">
        Inspection Date
      </label>

      <input
        type="date"
        name="inspectionDate"
        min={today}
        value={vehicleDetails.inspectionDate || ""}
        onChange={handleChange}
        className="w-full border-2 border-gray-200 py-3 px-4 rounded-xl mb-6 focus:outline-none focus:border-secondary"
      />

      {/* Inspection Branch */}
      <label className="block text-gray-700 font-medium mb-2">
        Inspection Branch
      </label>

      <select
        name="inspectionBranch"
        value={vehicleDetails.inspectionBranch || ""}
        onChange={handleChange}
        className="w-full border-2 border-gray-200 py-3 px-4 rounded-xl focus:outline-none focus:border-secondary"
      >
        <option value="">- select Location -</option>
        <option value="Jalhalli">Jalhalli, Bengaluru</option>
        <option value="Koramangala">Koramangala, Bengaluru</option>
        <option value="Whitefield">Whitefield, Bengaluru</option>
        <option value="Jayanagar">Jayanagar, Bengaluru</option>
      </select>

      {/* Continue Button */}
      <button
        onClick={saveInspectionDetails}
        disabled={
          !vehicleDetails.inspectionDate || !vehicleDetails.inspectionBranch
        }
        className={`mt-8 w-full py-3 rounded-xl font-semibold text-lg transition
        ${
          vehicleDetails.inspectionDate && vehicleDetails.inspectionBranch
            ? "bg-secondary text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>

    </div>
  );
}

export default Inspection;