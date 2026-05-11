import React from "react";

function PurchaseDetails({ vehicleDetails, setVehicleDetails, setStep }) {

  function handleChange(e) {
    const { name, value } = e.target;

    setVehicleDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function savePurchaseDetails() {
    setStep(7);
  }

  return (
    <div id="step-6" className="px-5 sm:px-10 py-8 max-w-xl mx-auto">

      <p className="text-2xl sm:text-3xl font-bold pb-6 sm:pb-8">
        Enter Purchase Details
      </p>

      {/* Purchase Date */}
      <label className="block text-gray-700 font-medium mb-2">
        Purchase Date:
      </label>

      <input
        type="date"
        name="purchasedDate"
        max={new Date(Date.now() - 86400000).toISOString().split("T")[0]}
        value={vehicleDetails.purchasedDate || ""}
        onChange={handleChange}
        className="w-full border-2 border-gray-200 py-3 px-4 rounded-xl mb-6 focus:outline-none focus:border-secondary"
      />

      {/* Purchase Amount */}
      <label className="block text-gray-700 font-medium mb-2">
        Purchase Amount (₹):
      </label>

      <input
        type="number"
        name="purchasedAmount"
        value={vehicleDetails.purchasedAmount || ""}
        onChange={handleChange}
        className="w-full border-2 border-gray-200 py-3 px-4 rounded-xl focus:outline-none focus:border-secondary"
      />

      {/* Continue Button */}
      <button
        onClick={savePurchaseDetails}
        className="mt-8 w-full bg-secondary text-white py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition-all"
        disabled={!vehicleDetails.purchasedDate || !vehicleDetails.purchasedAmount}
      >
        Continue
      </button>

    </div>
  );
}

export default PurchaseDetails;