import { useState } from "react";
import { data, useParams, Link } from "react-router";

const fields = [
  { id: "AirFilter", label: "vehicle AirFilter Condition" },
  { id: "Body", label: "vehicle Body Condition" },
  { id: "Battery", label: "vehicle Battery Condition" },
  { id: "Brake", label: "vehicle Brake Condition" },
  { id: "Tyre", label: "vehicle Tyre Condition" },
  { id: "Damage", label: "vehicle Damage Condition" },
  { id: "Engine", label: "vehicle Engine Condition" },
  { id: "Exhaust", label: "vehicle Exhaust Condition" },
  { id: "Seat", label: "vehicle Seat Condition" },
  { id: "Gear", label: "vehicle Gear Condition" },
  { id: "Handles", label: "vehicle Handle Condition" },
  { id: "Light", label: "vehicle Light Condition" },
  { id: "MeterBoard", label: "vehicle MeterBoard Condition" },
  {
    id: "Modification",
    label: "vehicle Modification Condition",
    isModification: true,
  },
  { id: "ShockAbsorber", label: "vehicle ShockAbsorber Condition" },
  { id: "Wheel", label: "vehicle Wheel Condition" },
];

const DropdownField = ({ label, value, onChange, isModification }) => {
  const options = isModification ? ["YES", "NO"] : ["OK", "NOT OK"];

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500 tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent cursor-pointer"
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const InspectVehicle = () => {
  const initialState = fields.reduce((acc, f) => {
    acc[f.id] = "";
    return acc;
  }, {});

  const url = `${import.meta.env.VITE_API_URL}`;
  const { id } = useParams();

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (id, val) => {
    setFormData((prev) => ({ ...prev, [id]: val }));
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmpty = Object.values(formData).some((v) => v === "");
    if (hasEmpty) {
      setError("Please select a value for all fields before submitting.");
      return;
    }

    fetch(`${url}/api/inspection/submit?vehicleId=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (!res.ok) {
        alert("failed");
        return;
      }
      res.json();
    });

    console.log("Inspection Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleReset = () => {
    setFormData(initialState);
    setSubmitted(false);
    setError("");
  };

  const leftFields = fields.filter((_, i) => i % 2 === 0);
  const rightFields = fields.filter((_, i) => i % 2 === 1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className=" bg-[#f6f3f1] flex items-center justify-center">
          <div className="bg-transparent rounded-2xl w-full max-w-6xl p-1 pb-4">
            <Link
              to={`/InspectVehicle`}
              className="text-gray-600 text-sm flex items-center gap-1 hover:text-gray-800 transition-colors"
            >
              ← Back
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏍️</span>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Vehicle Inspection Report
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">
                Fill in all condition fields below
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col gap-5">
                {leftFields.map((f) => (
                  <DropdownField
                    key={f.id}
                    label={f.label}
                    value={formData[f.id]}
                    onChange={(val) => handleChange(f.id, val)}
                    isModification={f.isModification}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-5">
                {rightFields.map((f) => (
                  <DropdownField
                    key={f.id}
                    label={f.label}
                    value={formData[f.id]}
                    onChange={(val) => handleChange(f.id, val)}
                    isModification={f.isModification}
                  />
                ))}
              </div>
            </div>

            {error && (
              <p className="mt-4 text-sm text-red-500 font-medium">{error}</p>
            )}

            <div className="flex gap-3 mt-6 pt-5 border-t border-gray-100">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl py-3 text-sm transition-colors duration-150 shadow-sm"
              >
                {submitted ? "✓ Submitted!" : "Submit Report"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-xl py-3 text-sm transition-colors duration-150"
              >
                Reset
              </button>
            </div>
            {submitted && (
              <p className="mt-3 text-center text-sm text-green-600 font-medium">
                ✅ Inspection report submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default InspectVehicle;

// import StaffNav from "../../components/Staff/StaffNav";

// const InspectVehicle = () => {
//     return (
//         <>
//         <div className="bg-gray-100 py-4 flex flex-col ">
//             <div>
//         <StaffNav/>
//         </div>
//         <div className="max-w-6xl mx-auto px-5 py-3">
//             <h1 className="text-3xl font-bold">Inspect Vehicle</h1>
            
           
//         </div>
//         </div>
//         </>
//     )
// }
// export default InspectVehicle


// import React, { useState } from "react";
// import StaffNav from "../../components/Staff/StaffNav";
// import VehicleCard from "../../components/Staff/VehicleCard"; // Adjust path as needed

// // Dummy data to simulate your accepted backend requests
// const mockData = [
//   {
//     id: 1,
//     model: "xyzzz",
//     brand: "TVS",
//     regNo: "KA 11 AA 1234",
//     customer: "aaa",
//     date: "Mar 2, 2026",
//     image: "https://images.timesdrive.in/photo/msid-153547019,thumbsize-280668/153547019.jpg" 
//   },
//   {
//     id: 1,
//     model: "hh",
//     brand: "TVS",
//     regNo: "KA 11 AA 1234",
//     customer: "aaa",
//     date: "Mar 2, 2026",
//     image: "https://images.timesdrive.in/photo/msid-153547019,thumbsize-280668/153547019.jpg" 
//   },
//   {
//     id: 2,
//     model: "Activa",
//     brand: "TVS",
//     regNo: "KA 11 AA 1234",
//     customer: "qwerty",
//     date: "Jan 2, 2023",
//     image: "https://images.timesdrive.in/photo/msid-153547019,thumbsize-280668/153547019.jpg"
//   },
//   {
//     id: 3,
//     model: "MT-15",
//     brand: "Yamaha",
//     regNo: "KA 02 AV 1546",
//     customer: "vishnu",
//     date: "Nov 2, 2025",
//     image: "https://images.timesdrive.in/photo/msid-153547019,thumbsize-280668/153547019.jpg"
//   }
// ];

// const InspectVehicle = () => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   // In the future, this will be populated via a fetch/axios call to your backend
//   const [inspectionQueue, setInspectionQueue] = useState(mockData);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Navigation */}
//       <StaffNav isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content Area - Note the md:ml-64 to offset the fixed sidebar */}
//       <div className="flex-1 md:ml-64 p-6 md:p-8">
//         <div className="max-w-6xl mx-auto">
          
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">Inspect Vehicle</h1>
//             {/* Optional: Add a mobile menu toggle button here if needed */}
//           </div>

//           {/* Conditional Rendering based on Queue Length */}
//           {inspectionQueue.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {inspectionQueue.map((vehicle) => (
//                 <VehicleCard key={vehicle.id} vehicle={vehicle} />
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm text-gray-500">
//               <p className="text-xl font-medium">No inspection in queue</p>
//               <p className="text-sm mt-2">Accepted vehicle requests will appear here.</p>
//             </div>
//           )}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InspectVehicle;


// import React, { useState, useEffect } from "react";
// import StaffNav from "../../components/Staff/StaffNav";
// import VehicleCard from "../../components/Staff/VehicleCard"; 

// const InspectVehicle = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inspectionQueue, setInspectionQueue] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Function to fetch data from your Spring Boot backend
//     const fetchInspectionQueue = async () => {
//       try {
//         // REPLACE this URL with your actual backend endpoint
//         const response = await fetch("http://localhost:8080/api/inspections/pending");
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setInspectionQueue(data);
//       } catch (err) {
//         console.error("Failed to fetch inspection queue:", err);
//         setError("Could not load the inspection queue. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchInspectionQueue();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Navigation */}
//       <StaffNav isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content Area */}
//       <div className="flex-1 md:ml-64 p-6 md:p-8">
//         <div className="max-w-6xl mx-auto">
          
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">Inspect Vehicle</h1>
//           </div>

//           {/* Handle Loading State */}
//           {isLoading ? (
//             <div className="flex justify-center py-20">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
//             </div>
//           ) : /* Handle Error State */
//           error ? (
//             <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
//               {error}
//             </div>
//           ) : /* Render Data or Empty State */
//           inspectionQueue.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {inspectionQueue.map((vehicle) => (
//                 <VehicleCard key={vehicle.id} vehicle={vehicle} />
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm text-gray-500">
//               <p className="text-xl font-medium">No inspection in queue</p>
//               <p className="text-sm mt-2">Accepted vehicle requests will appear here.</p>
//             </div>
//           )}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InspectVehicle;