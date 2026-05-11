import React from "react";

function Photos({ vehicleDetails, setVehicleDetails, setStep }) {
  const imageTypes = [
    { key: "front", label: "Front View" },
    { key: "back", label: "Back View" },
    { key: "right", label: "Right Side" },
    { key: "left", label: "Left Side" },
    { key: "dashboard", label: "Dashboard / Odometer" },
  ];
  

  const handleRegistrationChange = (e) => {
    setVehicleDetails({
      ...vehicleDetails,
      registrationNumber: e.target.value,
    });
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];

    setVehicleDetails({
      ...vehicleDetails,
      images: {
        ...vehicleDetails.images,
        [type]: file,
      },
    });
  };

  const removeImage = (type) => {
    const updatedImages = { ...vehicleDetails.images };
    delete updatedImages[type];

    setVehicleDetails({
      ...vehicleDetails,
      images: updatedImages,
    });
  };

  const uploadedImagesCount = Object.values(vehicleDetails.images || {}).filter(
    Boolean,
  ).length;

  const isValid =
    vehicleDetails.registrationNumber &&
    uploadedImagesCount === imageTypes.length;

  const handleContinue = () => {
    console.log("Final Vehicle Data:", vehicleDetails);
    setStep(9); 
  };
  return (
    <>
      <div className="px-20 py-10">
        <p className="text-3xl font-bold pb-8">Vehicle Registration & Photos</p>

        {/* Registration Input */}

        <label className="block text-gray-700 font-medium mb-2">
          Enter Vehicle Registration Number
        </label>

        <input
          type="text"
          placeholder="KA 01 AB 1234"
          value={vehicleDetails.registrationNumber || ""}
          onChange={handleRegistrationChange}
          className="w-full border-2 border-gray-200 py-3 px-4 rounded-xl mb-8 focus:outline-none"
        />

        {/* Photo Upload Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {imageTypes.map((img) => {
            const file = vehicleDetails.images?.[img.key];

            return (
              <div key={img.key} className="flex flex-col gap-2">
                <input
                  type="file"
                  hidden
                  id={img.key}
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, img.key)}
                />

                {/* Preview */}

                <div className="w-full h-40 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 overflow-hidden flex items-center justify-center">
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-300 text-sm">No photo</span>
                  )}
                </div>

                {/* Upload Button */}

                <button
                  type="button"
                  onClick={() => document.getElementById(img.key).click()}
                  className="border-2 border-secondary text-secondary rounded-xl py-2 text-sm font-semibold hover:bg-secondary hover:text-white transition"
                >
                  Upload {img.label}
                </button>

                {/* Remove Button */}

                {file && (
                  <button
                    onClick={() => removeImage(img.key)}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    ✕ Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Button */}

        <button
          disabled={!isValid}
          onClick={handleContinue}
          className={`mt-8 w-full py-3 rounded-xl font-semibold text-lg transition
        ${
          isValid
            ? "bg-secondary text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default Photos;
