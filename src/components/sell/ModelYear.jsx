import React from "react";

function ModelYear({ vehicleDetails, setVehicleDetails, setStep }) {
  const currentYear = new Date().getFullYear();

  const years = [];

  for (let y = currentYear; y >= 2006; y--) {
    years.push(y);
  }

  function handleYearClick(year) {
    setVehicleDetails({
      ...vehicleDetails,
      year: year,
    });

    setStep(5);
  }
  return (
    <>
      <div className="px-20 py-10">
        {/* Heading */}
        <p className="text-3xl font-bold pb-10">
          Select the <span className="text-secondary">Year</span> of your
          two-wheeler
        </p>

        {/* Year Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {years.map((year) => {
            const selected = vehicleDetails.year === year;
            return (
              <div
                key={year}
                className={`border rounded-xl p-4 text-center cursor-pointer
                       hover:bg-gray-100 hover:shadow-md transition duration-200
                        ${
                          selected
                            ? "border-secondary bg-secondary text-white shadow-md scale-105"
                            : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
                        }
              `}
                onClick={() => handleYearClick(year)}
              >
                <p className="text-lg font-semibold">{year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ModelYear;
