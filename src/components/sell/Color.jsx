import React from "react";

function Color({ vehicleDetails,setVehicleDetails, setStep }) {
  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white border" },
    { name: "Red", class: "bg-red-500" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "Gray", class: "bg-gray-500" },
    { name: "Silver", class: "bg-gray-300" },
  ];

  function handleColorClick(color) {
    setVehicleDetails((vehicleDetails) => ({
      ...vehicleDetails,
      color: color,
    }));

    setStep(6);
  }
  return (
    <>
      <div className="px-20 py-10">
        {/* Heading */}
        <p className="text-3xl font-bold pb-10">
          Select the <span className="text-secondary">Color</span> of your
          two-wheeler
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {colors.map((color) => {
            const selected = vehicleDetails.color === color.name;
            return (
              <div
                key={color.name}
                className={`border rounded-xl p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 hover:text-secondary hover:shadow-md transition
               ${
                 selected
                   ? "border-secondary bg-secondary text-white shadow-md scale-105"
                   : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
               }
              `}
                onClick={() => handleColorClick(color.name)}
              >
                {/* Color Circle */}
                <div
                  className={`w-10 h-10 rounded-full mb-3 ${color.class}`}
                ></div>

                {/* Name */}
                <p className="text-sm font-medium">{color.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Color;
