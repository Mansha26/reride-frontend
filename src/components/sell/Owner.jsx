import React from "react";

function Owner({ vehicleDetails, setVehicleDetails, setStep }) {
  const owners = [
    { label: "1st Owner", short: "1st" },
    { label: "2nd Owner", short: "2nd" },
    { label: "3rd Owner", short: "3rd" },
    { label: "4+ Owner", short: "4+" },
  ];

  function handleOwnerClick(owner) {
    setVehicleDetails((prev) => ({
      ...prev,
      ownerType: owner,
    }));

    setStep(8);
  }

  return (
    <div id="step-7" className="px-5 sm:px-10 py-8">

      <p className="text-2xl sm:text-3xl font-bold pb-8">
        Select <span className="text-secondary">Owner</span> type
      </p>

      <div
        id="ownerContainer"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {owners.map((owner) => (
          <div
            key={owner.label}
            onClick={() => handleOwnerClick(owner.label)}
            className={`flex flex-col items-center justify-center border-2 py-6 sm:py-8 rounded-2xl cursor-pointer transition-all
              ${
                vehicleDetails.ownerType === owner.label
                  ? "border-secondary bg-secondary text-white shadow-md scale-105"
                  : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
              }`}
          >
            <span
              className={`font-bold px-4 py-2 rounded-lg mb-3 text-lg
              ${
                vehicleDetails.ownerType === owner.label
                  ? "bg-white text-secondary"
                  : "bg-blue-100 text-secondary"
              }`}
            >
              {owner.short}
            </span>

            <p className="text-base sm:text-lg font-medium text-center">
              {owner.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Owner;