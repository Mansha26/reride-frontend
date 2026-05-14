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


import React, { useState, useEffect } from "react";
import StaffNav from "../../components/Staff/StaffNav";
import VehicleCard from "../../components/Staff/VehicleCard"; 

const InspectVehicle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inspectionQueue, setInspectionQueue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from your Spring Boot backend
    const fetchInspectionQueue = async () => {
      try {
        // REPLACE this URL with your actual backend endpoint
        const response = await fetch("http://localhost:8080/api/inspections/pending");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setInspectionQueue(data);
      } catch (err) {
        console.error("Failed to fetch inspection queue:", err);
        setError("Could not load the inspection queue. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInspectionQueue();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Navigation */}
      <StaffNav isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Inspect Vehicle</h1>
          </div>

          {/* Handle Loading State */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
          ) : /* Handle Error State */
          error ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
              {error}
            </div>
          ) : /* Render Data or Empty State */
          inspectionQueue.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inspectionQueue.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm text-gray-500">
              <p className="text-xl font-medium">No inspection in queue</p>
              <p className="text-sm mt-2">Accepted vehicle requests will appear here.</p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default InspectVehicle;