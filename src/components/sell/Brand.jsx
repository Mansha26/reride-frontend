import React, { useState, useEffect } from "react";

function Brand({ data, vehicleDetails, setStep, setVehicleDetails }) {
  const brands = Object.keys(data);

  const [otherBrand, setOtherBrand] = useState("");


  const isOtherSelected =
    vehicleDetails.brand && !brands.includes(vehicleDetails.brand);

  useEffect(() => {
    if (isOtherSelected && vehicleDetails.brand !== "Other" ) {
      setOtherBrand(vehicleDetails.brand);
    }
  }, [vehicleDetails.brand]);

  const handleBrandClick = (brand) => {
    setVehicleDetails({
      ...vehicleDetails,
      brand: brand,
    });

    setStep(2);
  };

  const handleOtherClick = () => {
    setOtherBrand("")
    setVehicleDetails({
      ...vehicleDetails,
      brand: "Other",
    });
  };

  const handleNext = () => {
    if (!otherBrand) return;

    setVehicleDetails({
      ...vehicleDetails,
      brand: otherBrand,
    });

    setStep(2);
  };

  return (
    <div className="px-5 py-10">
      <p className="text-3xl font-bold pb-10">
        Select the <span className="text-secondary">Brand</span> of your
        two-wheeler
      </p>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
        {brands.map((brand) => {
          const selected = vehicleDetails.brand === brand;

          return (
            <div
              key={brand}
              onClick={() => handleBrandClick(brand)}
              className={`border rounded-xl p-6 text-center cursor-pointer transition duration-200
              ${
                selected
                  ? "border-secondary bg-secondary text-white shadow-md"
                  : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
              }`}
            >
              <p className="text-lg font-semibold">{brand}</p>
            </div>
          );
        })}

        {/* Other Button */}
        <div
          onClick={handleOtherClick}
          className={`border rounded-xl p-6 text-center cursor-pointer transition duration-200 text-lg font-semibold
          ${
            isOtherSelected || vehicleDetails.brand === "Other"
              ? "border-secondary bg-secondary text-white shadow-md"
              : "border-gray-300 hover:bg-gray-100 hover:shadow-md"
          }`}
        >
          Other
        </div>
      </div>

      {/* Other Input */}
      {(vehicleDetails.brand === "Other" || isOtherSelected) && (
        <div className="mt-6 max-w-md">
          <label className="text-secondary block mb-2">Enter Brand Name</label>

          <input
            type="text"
            value={otherBrand}
            onChange={(e) => setOtherBrand(e.target.value)}
            placeholder="Enter brand name (e.g., TVS, Hero, Bajaj)"
            className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-secondary"
          />

          <button
            onClick={handleNext}
            className="bg-secondary text-white px-6 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Brand;
