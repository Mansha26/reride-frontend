import React from "react";
import { GiScooter } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";
import { MdElectricBike } from "react-icons/md";

function VehicleType({ vehicleDetails, setStep, setVehicleDetails }) {
  const types = [
    { name: "Scooty", icon: <GiScooter className="h-10 w-10" /> },
    { name: "Bike", icon: <FaMotorcycle className="h-10 w-10" /> },
    { name: "Electric", icon: <MdElectricBike className="h-10 w-10" /> },
  ];

  function handleTypeClick(type) {
    setVehicleDetails((prev) => ({
      ...prev,
      type: type,
    }));

    setStep(3);
  }

  return (
    <div id="step-2" className="px-5 py-10">
      {/* Heading */}
      <p className="text-3xl font-bold pb-8">
        Select the <span className="text-secondary">Type</span> of your
        two-wheeler
      </p>

      {/* Type Cards */}
      <div className="flex gap-6 justify-center">
        {types.map((item) => {
          const selected = vehicleDetails.type === item.name;

          return (
            <div
              key={item.name}
              onClick={() => handleTypeClick(item.name)}
              className={`flex flex-col items-center justify-center w-52 py-10 rounded-2xl cursor-pointer transition-all border-2
              
              ${
                selected
                  ? "border-secondary bg-secondary text-white shadow-md scale-105"
                  : "border-gray-300 hover:border-secondary hover:bg-gray-100"
              }`}
            >
              {/* Icon */}
              <div
                className={`rounded-xl p-4 mb-4 ${selected ? "bg-white/20" : "bg-gray-100"}`}
              >
                {item.icon}
              </div>

              {/* Type Name */}
              <p
                className={`text-xl font-semibold ${
                  selected ? "text-white" : "text-gray-700"
                }`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VehicleType;
